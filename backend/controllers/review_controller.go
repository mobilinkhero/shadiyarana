package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"wedding-vendor-backend/config"
	"wedding-vendor-backend/models"
)

func GetVendorReviews(c *gin.Context) {
	vendorID := c.Param("id")
	var reviews []models.Review

	if err := config.DB.Preload("User").Where("vendor_id = ? AND is_active = ?", vendorID, true).
		Order("created_at desc").Find(&reviews).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch reviews"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"reviews": reviews})
}

func CreateReview(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{"message": "Review created"})
}

func UpdateReview(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Review updated"})
}

func DeleteReview(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Review deleted"})
}

func GetAllReviews(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "All reviews"})
}

func ApproveReview(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Review approved"})
}

func DeleteReviewAdmin(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Review deleted by admin"})
}
