import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();
    
    // Simple security check
    if (secret !== 'setup-shadiyarana-2026') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Setting up database...');
    
    // Read and execute schema
    const schemaSQL = fs.readFileSync(path.join(process.cwd(), 'lib', 'schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✓ Schema created');
    
    // Read and execute seed data
    const seedSQL = fs.readFileSync(path.join(process.cwd(), 'lib', 'seed.sql'), 'utf8');
    await pool.query(seedSQL);
    console.log('✓ Seed data inserted');
    
    return NextResponse.json({
      success: true,
      message: 'Database setup complete!',
      credentials: {
        admin: 'admin@shadiyarana.com / admin123',
        user: 'ali@example.com / user123',
        vendor: 'photographer1@example.com / vendor123'
      }
    });
  } catch (error: any) {
    console.error('Database setup failed:', error);
    return NextResponse.json({ 
      error: 'Setup failed', 
      details: error.message 
    }, { status: 500 });
  }
}
