package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"wedding-vendor-backend/config"
	"wedding-vendor-backend/models"
)

func GetCategories(c *gin.Context) {
	var categories []models.Category

	if err := config.DB.Where("is_active = ?", true).Order("sort_order asc").Find(&categories).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch categories"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"categories": categories})
}

func CreateCategory(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{"message": "Category created"})
}

func UpdateCategory(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Category updated"})
}

func DeleteCategory(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Category deleted"})
}
