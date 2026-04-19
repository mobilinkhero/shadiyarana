import pool from './db';
import fs from 'fs';
import path from 'path';

async function setupDatabase() {
  try {
    console.log('Setting up database...');
    
    // Read and execute schema
    const schemaSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✓ Schema created');
    
    // Read and execute seed data
    const seedSQL = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
    await pool.query(seedSQL);
    console.log('✓ Seed data inserted');
    
    console.log('\n✅ Database setup complete!');
    console.log('\nDefault credentials:');
    console.log('Admin: admin@shadiyarana.com / admin123');
    console.log('User: ali@example.com / user123');
    console.log('Vendor: photographer1@example.com / vendor123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();
