package routes

import (
	"github.com/gin-gonic/gin"
	"wedding-vendor-backend/controllers"
	"wedding-vendor-backend/middleware"
)

func SetupRoutes(router *gin.Engine) {
	api := router.Group("/api/v1")

	// Public routes
	public := api.Group("")
	{
		// Auth routes
		public.POST("/auth/register", controllers.Register)
		public.POST("/auth/login", controllers.Login)
		public.POST("/auth/forgot-password", controllers.ForgotPassword)
		public.POST("/auth/reset-password", controllers.ResetPassword)

		// Vendor routes (public)
		public.GET("/vendors", controllers.GetVendors)
		public.GET("/vendors/:id", controllers.GetVendor)
		public.GET("/vendors/category/:category", controllers.GetVendorsByCategory)
		public.GET("/vendors/city/:city", controllers.GetVendorsByCity)
		public.GET("/vendors/:id/reviews", controllers.GetVendorReviews)

		// Category routes
		public.GET("/categories", controllers.GetCategories)

		// Search
		public.GET("/search", controllers.SearchVendors)
	}

	// Protected routes (require authentication)
	protected := api.Group("")
	protected.Use(middleware.AuthMiddleware())
	{
		// User routes
		protected.GET("/user/profile", controllers.GetProfile)
		protected.PUT("/user/profile", controllers.UpdateProfile)
		protected.POST("/user/change-password", controllers.ChangePassword)

		// Favorites
		protected.GET("/favorites", controllers.GetFavorites)
		protected.POST("/favorites/:vendor_id", controllers.AddFavorite)
		protected.DELETE("/favorites/:vendor_id", controllers.RemoveFavorite)

		// Bookings
		protected.GET("/bookings", controllers.GetUserBookings)
		protected.POST("/bookings", controllers.CreateBooking)
		protected.GET("/bookings/:id", controllers.GetBooking)
		protected.PUT("/bookings/:id", controllers.UpdateBooking)
		protected.DELETE("/bookings/:id", controllers.CancelBooking)

		// Reviews
		protected.POST("/reviews", controllers.CreateReview)
		protected.PUT("/reviews/:id", controllers.UpdateReview)
		protected.DELETE("/reviews/:id", controllers.DeleteReview)

		// Chat/Messages
		protected.GET("/messages", controllers.GetConversations)
		protected.GET("/messages/:vendor_id", controllers.GetMessages)
		protected.POST("/messages", controllers.SendMessage)
	}

	// Vendor routes (require vendor role)
	vendor := api.Group("/vendor")
	vendor.Use(middleware.AuthMiddleware(), middleware.VendorMiddleware())
	{
		vendor.GET("/dashboard", controllers.VendorDashboard)
		vendor.GET("/profile", controllers.GetVendorProfile)
		vendor.PUT("/profile", controllers.UpdateVendorProfile)
		vendor.GET("/bookings", controllers.GetVendorBookings)
		vendor.PUT("/bookings/:id/status", controllers.UpdateBookingStatus)
		vendor.GET("/reviews", controllers.GetVendorReviewsList)
		vendor.GET("/analytics", controllers.GetVendorAnalytics)
	}

	// Admin routes (require admin role)
	admin := api.Group("/admin")
	admin.Use(middleware.AuthMiddleware(), middleware.AdminMiddleware())
	{
		// User management
		admin.GET("/users", controllers.GetAllUsers)
		admin.GET("/users/:id", controllers.GetUserByID)
		admin.PUT("/users/:id", controllers.UpdateUser)
		admin.DELETE("/users/:id", controllers.DeleteUser)

		// Vendor management
		admin.GET("/vendors", controllers.GetAllVendors)
		admin.POST("/vendors", controllers.CreateVendor)
		admin.PUT("/vendors/:id", controllers.UpdateVendor)
		admin.DELETE("/vendors/:id", controllers.DeleteVendor)
		admin.PUT("/vendors/:id/verify", controllers.VerifyVendor)
		admin.PUT("/vendors/:id/feature", controllers.FeatureVendor)

		// Category management
		admin.POST("/categories", controllers.CreateCategory)
		admin.PUT("/categories/:id", controllers.UpdateCategory)
		admin.DELETE("/categories/:id", controllers.DeleteCategory)

		// Booking management
		admin.GET("/bookings", controllers.GetAllBookings)

		// Review management
		admin.GET("/reviews", controllers.GetAllReviews)
		admin.PUT("/reviews/:id/approve", controllers.ApproveReview)
		admin.DELETE("/reviews/:id", controllers.DeleteReviewAdmin)

		// Analytics
		admin.GET("/analytics/overview", controllers.GetAdminAnalytics)
		admin.GET("/analytics/revenue", controllers.GetRevenueAnalytics)
	}
}
