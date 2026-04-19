'use client';

import { useState } from 'react';

export default function SetupPage() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runSetup = async () => {
    setLoading(true);
    setStatus('Setting up database...');
    
    try {
      const response = await fetch('/api/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: 'setup-shadiyarana-2026' })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('✅ Success!');
        setResult(data);
      } else {
        setStatus('❌ Error: ' + data.error);
        setResult(data);
      }
    } catch (error: any) {
      setStatus('❌ Failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Database Setup
        </h1>
        
        <p className="text-gray-600 mb-6">
          Click the button below to initialize the database with:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>10 Vendors (photographers, venues, caterers, etc.)</li>
          <li>9 Users (admin, vendors, customers)</li>
          <li>Sample bookings and reviews</li>
          <li>Messages and chat data</li>
          <li>4 Blog posts</li>
          <li>Settings and categories</li>
        </ul>
        
        <button
          onClick={runSetup}
          disabled={loading}
          className="w-full bg-red-800 text-white py-3 px-6 rounded-lg hover:bg-red-900 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
        >
          {loading ? 'Setting up...' : 'Initialize Database'}
        </button>
        
        {status && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-lg mb-2">{status}</p>
            
            {result && result.credentials && (
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold">Login Credentials:</p>
                <p>Admin: {result.credentials.admin}</p>
                <p>User: {result.credentials.user}</p>
                <p>Vendor: {result.credentials.vendor}</p>
              </div>
            )}
            
            {result && result.details && (
              <pre className="mt-4 text-xs text-red-600 overflow-auto">
                {result.details}
              </pre>
            )}
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-500">
          <p>After setup, you can access:</p>
          <ul className="list-disc list-inside mt-2">
            <li><a href="/" className="text-blue-600 hover:underline">Homepage</a></li>
            <li><a href="/admin" className="text-blue-600 hover:underline">Admin Panel</a></li>
            <li><a href="/vendor" className="text-blue-600 hover:underline">Vendor Portal</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
