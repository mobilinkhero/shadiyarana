# Admin Panel - Wedding Vendor Marketplace

Admin dashboard for managing the wedding vendor marketplace platform.

## Features

- ✅ Dashboard with analytics
- ✅ Vendor management
- ✅ User management
- ✅ Booking management
- ✅ Review moderation
- ✅ Category management
- ✅ Analytics & reports

## Setup

```bash
cd admin-panel

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Run development server
npm run dev
```

Visit: `http://localhost:3001`

## Pages

- `/` - Dashboard with stats and charts
- `/vendors` - Manage vendors (verify, feature, delete)
- `/users` - Manage users
- `/bookings` - View and manage bookings
- `/reviews` - Moderate reviews
- `/categories` - Manage categories
- `/analytics` - Detailed analytics
- `/settings` - Platform settings

## API Endpoints

All endpoints require admin authentication:

```typescript
// Headers
Authorization: Bearer <admin_jwt_token>

// Endpoints
GET /api/v1/admin/users
GET /api/v1/admin/vendors
PUT /api/v1/admin/vendors/:id/verify
GET /api/v1/admin/bookings
GET /api/v1/admin/analytics
```

## Deployment

### Coolify
- Push to GitHub
- Create new application
- Select Next.js build pack
- Set environment variables
- Deploy!

## TODO

- [ ] Connect to backend API
- [ ] Implement vendor management
- [ ] Implement user management
- [ ] Add charts (Recharts)
- [ ] Add data tables
- [ ] Add authentication
- [ ] Add role-based access
