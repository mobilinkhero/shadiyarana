import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(`
      SELECT 
        v.*,
        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object('service', s.service_name)
          ) FILTER (WHERE s.service_name IS NOT NULL),
          '[]'
        ) as services,
        COALESCE(
          json_agg(
            DISTINCT jsonb_build_object('url', p.image_url)
          ) FILTER (WHERE p.image_url IS NOT NULL),
          '[]'
        ) as portfolio_images
      FROM vendors v
      LEFT JOIN (
        SELECT vendor_id, unnest(services) as service_name
        FROM vendors
      ) s ON v.id = s.vendor_id
      LEFT JOIN (
        SELECT vendor_id, unnest(portfolio_images) as image_url
        FROM vendors
      ) p ON v.id = p.vendor_id
      WHERE v.id = $1
      GROUP BY v.id
    `, [params.id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 });
    }

    const vendor = result.rows[0];
    
    // Parse JSON fields
    vendor.services = vendor.services.map((s: any) => s.service);
    vendor.portfolio_images = vendor.portfolio_images.map((p: any) => p.url);

    return NextResponse.json(vendor);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch vendor' }, { status: 500 });
  }
}
