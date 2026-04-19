import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const vendorId = params.id;

    const [bookings, revenue, reviews, messages] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM bookings WHERE vendor_id = $1', [vendorId]),
      pool.query('SELECT SUM(total_amount) FROM bookings WHERE vendor_id = $1 AND status = $2', [vendorId, 'confirmed']),
      pool.query('SELECT AVG(rating) as avg_rating, COUNT(*) as count FROM reviews WHERE vendor_id = $1', [vendorId]),
      pool.query('SELECT COUNT(*) FROM messages WHERE vendor_id = $1', [vendorId])
    ]);

    return NextResponse.json({
      totalBookings: parseInt(bookings.rows[0].count),
      totalRevenue: parseFloat(revenue.rows[0].sum || 0),
      averageRating: parseFloat(reviews.rows[0].avg_rating || 0).toFixed(1),
      reviewsCount: parseInt(reviews.rows[0].count),
      messagesCount: parseInt(messages.rows[0].count)
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch vendor stats' }, { status: 500 });
  }
}
