# Vendor Portal - Wedding Vendor Marketplace

Vendor dashboard for managing wedding services and bookings.

## Features

- ✅ Dashboard with stats
- ✅ Booking management
- ✅ Profile management
- ✅ Review management
- ✅ Customer messaging
- ✅ Analytics
- ✅ Portfolio management

## Setup

```bash
cd vendor-portal

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Run development server
npm run dev
```

Visit: `http://localhost:3002`

## Pages

- `/` - Dashboard with stats and recent bookings
- `/bookings` - Manage bookings (accept, reject, complete)
- `/profile` - Edit vendor profile and services
- `/reviews` - View and respond to reviews
- `/messages` - Chat with customers
- `/analytics` - Detailed performance analytics
- `/settings` - Account settings

## API Endpoints

All endpoints require vendor authentication:

```typescript
// Headers
Authorization: Bearer <vendor_jwt_token>

// Endpoints
GET /api/v1/vendor/dashboard
GET /api/v1/vendor/bookings
PUT /api/v1/vendor/bookings/:id/status
GET /api/v1/vendor/profile
PUT /api/v1/vendor/profile
GET /api/v1/vendor/analytics
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
- [ ] Implement booking management
- [ ] Implement profile editing
- [ ] Add charts (Recharts)
- [ ] Add messaging system
- [ ] Add authentication
- [ ] Add image upload
