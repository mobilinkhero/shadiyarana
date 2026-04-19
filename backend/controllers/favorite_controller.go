package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetFavorites(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "User favorites"})
}

func AddFavorite(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{"message": "Added to favorites"})
}

func RemoveFavorite(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Removed from favorites"})
}
