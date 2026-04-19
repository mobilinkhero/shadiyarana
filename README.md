# Shadiyarana - Wedding Vendor Marketplace

Clean, organized wedding vendor marketplace platform.

## 📁 Structure

```
shadiyarana/
├── src/
│   ├── backend/              # Go API
│   ├── frontend/
│   │   ├── website/          # User website (Next.js)
│   │   ├── admin/            # Admin panel (Next.js)
│   │   └── vendor/           # Vendor portal (Next.js)
│   └── config/
│       └── nginx/            # Nginx configuration
├── docker-compose.yml        # Deploy everything
├── .env.example              # Environment template
└── deploy.sh                 # One-click deploy
```

## 🚀 Quick Start

```bash
# Setup
cp .env.example .env

# Deploy everything
chmod +x deploy.sh
./deploy.sh
```

## 🌐 Access

- Website: http://localhost
- Admin: http://localhost:3001
- Vendor: http://localhost:3002
- API: http://localhost:8080

## 📚 Documentation

See individual folders for specific documentation.
