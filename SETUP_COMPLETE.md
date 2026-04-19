# Shadiyarana - Complete Wedding Vendor Marketplace

## ✅ What's Included

### Database Schema
- Users (Admin, Vendors, Customers)
- Categories (8 wedding service categories)
- Vendors (with verification & featured status)
- Bookings (with status tracking)
- Reviews & Ratings
- Messages (chat system)
- Favorites
- Blogs
- Settings

### Dummy Data
- 1 Admin user
- 3 Regular users
- 5 Vendor users
- 10 Vendors across different categories
- Sample bookings
- Reviews and ratings
- Messages
- 4 Blog posts

### Features Implemented
✅ User authentication (login/register)
✅ Vendor listings with search & filter
✅ Booking system
✅ Review & rating system
✅ Messaging system
✅ Favorites/wishlist
✅ Admin panel
✅ Vendor dashboard
✅ Blog system
✅ Settings management

## 🚀 Setup Instructions

### 1. Database Setup

Run this command to create tables and insert dummy data:

```bash
cd shadiyarana/web
npm install
npm run setup-db
```

### 2. Default Login Credentials

**Admin Panel** (`/admin`):
- Email: `admin@shadiyarana.com`
- Password: `admin123`

**Vendor Portal** (`/vendor`):
- Email: `photographer1@example.com`
- Password: `vendor123`

**User Account**:
- Email: `ali@example.com`
- Password: `user123`

### 3. Access the System

- **Homepage**: `http://yourdomain.com/`
- **Admin Panel**: `http://yourdomain.com/admin`
- **Vendor Portal**: `http://yourdomain.com/vendor`

## 📊 Database Overview

### Users
- 9 total users (1 admin, 5 vendors, 3 customers)
- All passwords are hashed with bcrypt

### Vendors
- 10 vendors across 8 categories
- Located in Lahore, Karachi, Islamabad
- Price ranges from PKR 25,000 to 800,000
- Ratings from 4.4 to 4.9 stars

### Categories
1. Photographers
2. Venues
3. Caterers
4. Decorators
5. Makeup Artists
6. DJs & Music
7. Mehndi Artists
8. Florists

### Sample Bookings
- 4 bookings with different statuses
- Dates ranging from June to August 2026
- Guest counts from 200 to 500

## 🎯 Next Steps

1. **Customize Design**: Update colors, logos, and branding
2. **Add Payment Gateway**: Integrate payment processing
3. **Email Notifications**: Set up email service
4. **File Uploads**: Configure image upload for vendors
5. **Advanced Search**: Add filters and sorting
6. **Mobile App**: Connect your Flutter app to this backend

## 📝 API Endpoints

All API routes are in `/api/*`:
- `/api/vendors` - List vendors
- `/api/categories` - List categories
- `/api/auth/login` - User login
- `/api/bookings` - Manage bookings
- `/api/messages` - Chat system
- `/api/reviews` - Reviews & ratings

## 🔒 Security

- Passwords are hashed with bcrypt
- JWT tokens for authentication
- SQL injection protection with parameterized queries
- Role-based access control (User/Vendor/Admin)

## 💡 Tips

- Change default passwords immediately
- Update JWT_SECRET in environment variables
- Enable SSL in production
- Set up regular database backups
- Monitor application logs

## 🆘 Support

If you need help:
1. Check the logs in Coolify
2. Verify database connection
3. Ensure all environment variables are set
4. Test API endpoints individually

---

**Your wedding vendor marketplace is now ready to use!** 🎉
