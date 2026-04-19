import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [users, vendors, bookings, revenue] = await Promise.all([
      pool.query('SELECT COUNT(*) FROM users'),
      pool.query('SELECT COUNT(*) FROM vendors'),
      pool.query('SELECT COUNT(*) FROM bookings'),
      pool.query('SELECT SUM(total_amount) FROM bookings WHERE status = $1', ['confirmed'])
    ]);

    return NextResponse.json({
      totalUsers: parseInt(users.rows[0].count),
      totalVendors: parseInt(vendors.rows[0].count),
      totalBookings: parseInt(bookings.rows[0].count),
      totalRevenue: parseFloat(revenue.rows[0].sum || 0)
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
