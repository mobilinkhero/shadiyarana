package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "User profile"})
}

func UpdateProfile(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Profile updated"})
}

func ChangePassword(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Password changed"})
}
