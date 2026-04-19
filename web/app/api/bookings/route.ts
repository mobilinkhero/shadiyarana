import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT b.*, u.name as user_name, v.name as vendor_name 
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN vendors v ON b.vendor_id = v.id
      ORDER BY b.created_at DESC
    `);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
