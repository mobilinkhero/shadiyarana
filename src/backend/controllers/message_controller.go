package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetConversations(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "User conversations"})
}

func GetMessages(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Messages with vendor"})
}

func SendMessage(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{"message": "Message sent"})
}
