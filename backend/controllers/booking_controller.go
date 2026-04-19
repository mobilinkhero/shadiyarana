package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUserBookings(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "User bookings"})
}

func CreateBooking(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{"message": "Booking created"})
}

func GetBooking(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Booking details"})
}

func UpdateBooking(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Booking updated"})
}

func CancelBooking(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Booking cancelled"})
}

func GetAllBookings(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "All bookings"})
}
