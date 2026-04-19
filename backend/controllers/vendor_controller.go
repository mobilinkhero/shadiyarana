package controllers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"wedding-vendor-backend/config"
	"wedding-vendor-backend/models"
)

func GetVendors(c *gin.Context) {
	var vendors []models.Vendor
	query := config.DB.Where("is_active = ?", true)

	// Filters
	if city := c.Query("city"); city != "" {
		query = query.Where("city = ?", city)
	}
	if category := c.Query("category"); category != "" {
		query = query.Where("category = ?", category)
	}
	if featured := c.Query("featured"); featured == "true" {
		query = query.Where("is_featured = ?", true)
	}

	// Sorting
	sortBy := c.DefaultQuery("sort", "created_at")
	order := c.DefaultQuery("order", "desc")
	query = query.Order(sortBy + " " + order)

	// Pagination
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "20"))
	offset := (page - 1) * limit

	var total int64
	query.Model(&models.Vendor{}).Count(&total)

	if err := query.Offset(offset).Limit(limit).Find(&vendors).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch vendors"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"vendors": vendors,
		"total":   total,
		"page":    page,
		"limit":   limit,
	})
}

func GetVendor(c *gin.Context) {
	id := c.Param("id")
	var vendor models.Vendor

	if err := config.DB.Preload("Reviews").First(&vendor, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Vendor not found"})
		return
	}

	// Increment view count
	config.DB.Model(&vendor).Update("view_count", vendor.ViewCount+1)

	c.JSON(http.StatusOK, gin.H{"vendor": vendor})
}

func GetVendorsByCategory(c *gin.Context) {
	category := c.Param("category")
	var vendors []models.Vendor

	if err := config.DB.Where("category = ? AND is_active = ?", category, true).Find(&vendors).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch vendors"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"vendors": vendors})
}

func GetVendorsByCity(c *gin.Context) {
	city := c.Param("city")
	var vendors []models.Vendor

	if err := config.DB.Where("city = ? AND is_active = ?", city, true).Find(&vendors).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch vendors"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"vendors": vendors})
}

func SearchVendors(c *gin.Context) {
	search := c.Query("q")
	var vendors []models.Vendor

	query := config.DB.Where("is_active = ?", true)
	if search != "" {
		query = query.Where("name ILIKE ? OR description ILIKE ? OR category ILIKE ?",
			"%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	if err := query.Find(&vendors).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Search failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"vendors": vendors})
}

// Vendor Dashboard & Management
func VendorDashboard(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Vendor dashboard"})
}

func GetVendorProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Vendor profile"})
}

func UpdateVendorProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Profile updated"})
}

func GetVendorBookings(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Vendor bookings"})
}

func UpdateBookingStatus(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Booking status updated"})
}

func GetVendorReviewsList(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Vendor reviews"})
}

func GetVendorAnalytics(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Vendor analytics"})
}
