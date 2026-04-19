-- Seed data for Wedding Vendor Marketplace

-- Insert categories
INSERT INTO categories (name, slug, description, icon) VALUES
('Photographers', 'photographers', 'Professional wedding photographers', '📸'),
('Venues', 'venues', 'Beautiful wedding venues and halls', '🏛️'),
('Caterers', 'caterers', 'Delicious food and catering services', '🍽️'),
('Decorators', 'decorators', 'Creative wedding decoration services', '🎨'),
('Makeup Artists', 'makeup-artists', 'Professional bridal makeup artists', '💄'),
('DJs & Music', 'djs-music', 'Entertainment and music services', '🎵'),
('Mehndi Artists', 'mehndi-artists', 'Traditional mehndi/henna artists', '🎨'),
('Florists', 'florists', 'Beautiful flower arrangements', '🌸')
ON CONFLICT (slug) DO NOTHING;

-- Insert admin user (password: admin123)
INSERT INTO users (email, password, name, role) VALUES
('admin@shadiyarana.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample users (password: user123)
INSERT INTO users (email, password, name, phone, role) VALUES
('ali@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Ali Ahmed', '+92-300-1234567', 'user'),
('sara@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Sara Khan', '+92-301-2345678', 'user'),
('ahmed@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Ahmed Hassan', '+92-302-3456789', 'user')
ON CONFLICT (email) DO NOTHING;

-- Insert vendor users (password: vendor123)
INSERT INTO users (email, password, name, phone, role) VALUES
('photographer1@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Zain Photography', '+92-321-1111111', 'vendor'),
('venue1@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Royal Banquet', '+92-321-2222222', 'vendor'),
('caterer1@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Taste of Pakistan', '+92-321-3333333', 'vendor'),
('decorator1@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Dream Decorators', '+92-321-4444444', 'vendor'),
('makeup1@example.com', '$2a$10$rZ5qH8qF9vX3yN2wL4kJ4.xK7mP9tQ1sR6nO8pL5mK4jI3hG2fE1u', 'Glam Studio', '+92-321-5555555', 'vendor')
ON CONFLICT (email) DO NOTHING;

-- Insert vendors
INSERT INTO vendors (user_id, business_name, category_id, description, address, city, state, phone, email, price_range, rating, total_reviews, is_verified, is_featured, status) VALUES
((SELECT id FROM users WHERE email = 'photographer1@example.com'), 'Zain Photography Studio', 1, 'Professional wedding photography with 10+ years experience. Capturing your special moments beautifully.', 'DHA Phase 5, Lahore', 'Lahore', 'Punjab', '+92-321-1111111', 'info@zainphoto.com', '50000-150000', 4.8, 45, TRUE, TRUE, 'approved'),
((SELECT id FROM users WHERE email = 'venue1@example.com'), 'Royal Banquet Hall', 2, 'Luxurious wedding venue with capacity of 1000+ guests. Modern facilities and elegant decor.', 'Gulberg III, Lahore', 'Lahore', 'Punjab', '+92-321-2222222', 'booking@royalbanquet.com', '200000-500000', 4.9, 67, TRUE, TRUE, 'approved'),
((SELECT id FROM users WHERE email = 'caterer1@example.com'), 'Taste of Pakistan Catering', 3, 'Authentic Pakistani cuisine for weddings. Specializing in traditional and modern dishes.', 'Model Town, Lahore', 'Lahore', 'Punjab', '+92-321-3333333', 'orders@tasteofpk.com', '800-1500 per person', 4.7, 89, TRUE, FALSE, 'approved'),
((SELECT id FROM users WHERE email = 'decorator1@example.com'), 'Dream Decorators', 4, 'Creative wedding decoration services. Transforming venues into magical spaces.', 'Johar Town, Lahore', 'Lahore', 'Punjab', '+92-321-4444444', 'info@dreamdeco.com', '100000-300000', 4.6, 34, TRUE, TRUE, 'approved'),
((SELECT id FROM users WHERE email = 'makeup1@example.com'), 'Glam Studio by Ayesha', 5, 'Professional bridal makeup artist. Specializing in traditional and modern looks.', 'Bahria Town, Lahore', 'Lahore', 'Punjab', '+92-321-5555555', 'bookings@glamstudio.com', '25000-75000', 4.9, 120, TRUE, TRUE, 'approved');

-- Insert more vendors for variety
INSERT INTO vendors (user_id, business_name, category_id, description, address, city, state, phone, price_range, rating, total_reviews, is_verified, status) VALUES
(1, 'Moments Photography', 1, 'Candid wedding photography specialists', 'F-7, Islamabad', 'Islamabad', 'ICT', '+92-333-1111111', '40000-120000', 4.5, 28, TRUE, 'approved'),
(1, 'Pearl Continental Hotel', 2, 'Premium hotel with wedding facilities', 'Mall Road, Lahore', 'Lahore', 'Punjab', '+92-42-1234567', '300000-800000', 4.8, 156, TRUE, 'approved'),
(1, 'Spice Garden Catering', 3, 'Multi-cuisine catering services', 'Clifton, Karachi', 'Karachi', 'Sindh', '+92-21-1234567', '1000-2000 per person', 4.4, 45, TRUE, 'approved'),
(1, 'Elegant Events', 4, 'Full-service event decoration', 'Saddar, Karachi', 'Karachi', 'Sindh', '+92-300-9999999', '80000-250000', 4.7, 52, TRUE, 'approved'),
(1, 'Bridal Bliss Makeup', 5, 'Certified makeup artists', 'Blue Area, Islamabad', 'Islamabad', 'ICT', '+92-51-1234567', '30000-80000', 4.6, 78, TRUE, 'approved');

-- Insert sample bookings
INSERT INTO bookings (user_id, vendor_id, event_date, event_type, venue, guest_count, budget, status, notes) VALUES
(2, 1, '2026-06-15', 'Wedding', 'Royal Banquet Hall, Lahore', 500, 150000, 'confirmed', 'Need full day coverage'),
(2, 2, '2026-06-15', 'Wedding', 'Royal Banquet Hall, Lahore', 500, 400000, 'confirmed', 'Booking for wedding venue'),
(3, 3, '2026-07-20', 'Mehndi', 'Home', 200, 80000, 'pending', 'Traditional Pakistani menu'),
(4, 5, '2026-08-10', 'Wedding', 'Pearl Continental', 300, 50000, 'confirmed', 'Bridal makeup for morning event');

-- Insert sample reviews
INSERT INTO reviews (vendor_id, user_id, rating, comment) VALUES
(1, 2, 5, 'Amazing photography! Captured every moment perfectly. Highly recommended!'),
(1, 3, 5, 'Very professional and creative. The photos turned out beautiful.'),
(1, 4, 4, 'Good service but slightly expensive. Overall satisfied with the work.'),
(2, 2, 5, 'Beautiful venue with excellent facilities. Staff was very cooperative.'),
(2, 3, 5, 'Perfect location for our wedding. Everything was well organized.'),
(3, 2, 5, 'Delicious food! All guests loved the menu. Great service.'),
(3, 4, 4, 'Good quality food. Presentation could be better.'),
(5, 2, 5, 'Best makeup artist in town! Made me look stunning on my special day.'),
(5, 3, 5, 'Very talented and professional. Highly recommend for bridal makeup.');

-- Insert sample messages
INSERT INTO messages (sender_id, receiver_id, booking_id, message) VALUES
(2, 5, 1, 'Hi, I would like to book your photography services for June 15th.'),
(5, 2, 1, 'Hello! Yes, we are available on that date. Let me send you our packages.'),
(2, 5, 1, 'Great! Please share the pricing details.'),
(3, 6, 3, 'Is your catering service available for a mehndi event?'),
(6, 3, 3, 'Yes, we specialize in mehndi events. What is your guest count?');

-- Insert sample blogs
INSERT INTO blogs (title, slug, content, excerpt, author_id, category, status, views) VALUES
('Top 10 Wedding Venues in Lahore', 'top-10-wedding-venues-lahore', 'Planning a wedding in Lahore? Here are the top 10 venues that will make your special day unforgettable...', 'Discover the best wedding venues in Lahore for your dream wedding', 1, 'Venues', 'published', 1250),
('How to Choose the Perfect Wedding Photographer', 'choose-perfect-wedding-photographer', 'Your wedding photos will be cherished forever. Here''s how to choose the right photographer...', 'Expert tips on selecting the best wedding photographer', 1, 'Photography', 'published', 890),
('Pakistani Wedding Traditions Explained', 'pakistani-wedding-traditions', 'From Mehndi to Valima, learn about traditional Pakistani wedding ceremonies...', 'A complete guide to Pakistani wedding customs and traditions', 1, 'Culture', 'published', 2100),
('Budget-Friendly Wedding Planning Tips', 'budget-friendly-wedding-planning', 'Plan your dream wedding without breaking the bank. Here are practical tips...', 'Save money while planning your perfect wedding', 1, 'Planning', 'published', 1560);

-- Insert settings
INSERT INTO settings (key, value, type) VALUES
('site_name', 'Shadiyarana', 'text'),
('site_tagline', 'Your Perfect Wedding Starts Here', 'text'),
('contact_email', 'info@shadiyarana.com', 'email'),
('contact_phone', '+92-300-1234567', 'phone'),
('commission_rate', '10', 'number'),
('currency', 'PKR', 'text'),
('enable_vendor_registration', 'true', 'boolean')
ON CONFLICT (key) DO NOTHING;
