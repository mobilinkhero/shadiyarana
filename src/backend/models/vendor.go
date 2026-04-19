package models

import (
	"time"

	"gorm.io/gorm"
)

type Vendor struct {
	ID              uint           `gorm:"primaryKey" json:"id"`
	UserID          uint           `gorm:"not null" json:"user_id"`
	Name            string         `gorm:"size:255;not null" json:"name"`
	Category        string         `gorm:"size:100;not null" json:"category"`
	Description     string         `gorm:"type:text" json:"description"`
	Location        string         `gorm:"size:255" json:"location"`
	City            string         `gorm:"size:100;index" json:"city"`
	StartingPrice   string         `gorm:"size:100" json:"starting_price"`
	ImageURL        string         `gorm:"size:500" json:"image_url"`
	CoverImage      string         `gorm:"size:500" json:"cover_image"`
	Phone           string         `gorm:"size:20" json:"phone"`
	WhatsApp        string         `gorm:"size:20" json:"whatsapp"`
	Email           string         `gorm:"size:255" json:"email"`
	Website         string         `gorm:"size:500" json:"website"`
	Rating          float64        `gorm:"default:0" json:"rating"`
	ReviewCount     int            `gorm:"default:0" json:"review_count"`
	IsVerified      bool           `gorm:"default:false" json:"is_verified"`
	IsFeatured      bool           `gorm:"default:false" json:"is_featured"`
	IsActive        bool           `gorm:"default:true" json:"is_active"`
	ViewCount       int            `gorm:"default:0" json:"view_count"`
	Services        string         `gorm:"type:text" json:"services"` // JSON array
	PortfolioImages string         `gorm:"type:text" json:"portfolio_images"` // JSON array
	BusinessHours   string         `gorm:"type:text" json:"business_hours"` // JSON object
	CreatedAt       time.Time      `json:"created_at"`
	UpdatedAt       time.Time      `json:"updated_at"`
	DeletedAt       gorm.DeletedAt `gorm:"index" json:"-"`

	// Relationships
	User      User       `gorm:"foreignKey:UserID" json:"user,omitempty"`
	Reviews   []Review   `gorm:"foreignKey:VendorID" json:"reviews,omitempty"`
	Bookings  []Booking  `gorm:"foreignKey:VendorID" json:"bookings,omitempty"`
	Favorites []Favorite `gorm:"foreignKey:VendorID" json:"favorites,omitempty"`
}
