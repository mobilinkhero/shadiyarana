# Deployment Guide - Single Domain Setup

Everything on ONE domain: `yourdomain.com`

## Architecture

```
yourdomain.com/          → Frontend (User Website)
yourdomain.com/admin     → Admin Panel
yourdomain.com/vendor    → Vendor Portal  
yourdomain.com/api       → Backend API
```

## Option 1: Deploy on Coolify (Recommended)

### Step 1: Deploy Backend API

1. Create new application in Coolify
2. Source: `mobilinkhero/shadiyarana`
3. Build Pack: `dockerfile`
4. Base Directory: `backend`
5. Environment Variables:
   ```
   DB_HOST=wksejfqi54r9uzavkqpjm9a6
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=ca0O3eyhbC2UgrOnJDzj29LdjaL4S6wY9wDMecgqvOg4LzXlonwMI0pmpgq8J6EA
   DB_NAME=postgres
   DB_SSLMODE=require
   JWT_SECRET=your-secret-key
   ```
6. Deploy → Get backend URL (e.g., `http://backend.yourdomain.com`)

### Step 2: Deploy Frontend

1. Create new application in Coolify
2. Source: `mobilinkhero/shadiyarana`
3. Build Pack: `dockerfile`
4. Base Directory: `web`
5. Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=http://backend.yourdomain.com/api/v1
   ```
6. Deploy → Get frontend URL (e.g., `http://yourdomain.com`)

### Step 3: Configure Nginx (Optional - for single domain)

If you want everything on ONE domain, set up Nginx reverse proxy:
- `/` → Frontend
- `/api` → Backend

## Option 2: Docker Compose (Local/VPS)

```bash
# 1. Clone repo
git clone https://github.com/mobilinkhero/shadiyarana.git
cd shadiyarana

# 2. Create .env file
cp .env.example .env
# Edit .env with your database credentials

# 3. Run everything
docker-compose up -d

# 4. Access
# http://localhost/          - User Website
# http://localhost/admin     - Admin Panel
# http://localhost/vendor    - Vendor Portal
# http://localhost/api       - Backend API
```

## What You Have

✅ Backend API (Go + Gin + PostgreSQL)
✅ Frontend Web App (Next.js with route-based separation)
✅ Nginx reverse proxy configuration
✅ Docker setup for everything

## Routes

### Frontend (Next.js)
- `/` - User website homepage
- `/vendors` - Browse vendors
- `/categories` - Browse categories
- `/admin` - Admin dashboard
- `/vendor` - Vendor portal

### Backend API
- `GET /health` - Health check
- `POST /api/v1/auth/register` - Register
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/vendors` - List vendors
- `GET /api/v1/categories` - List categories
- And 50+ more endpoints...

## Current Status

✅ Backend deployed and running on Coolify
⏳ Frontend needs to be deployed

Deploy the frontend (web folder) and you'll have everything working!
