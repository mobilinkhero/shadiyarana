package models

import (
	"time"

	"gorm.io/gorm"
)

type Review struct {
	ID        uint           `gorm:"primaryKey" json:"id"`
	UserID    uint           `gorm:"not null;index" json:"user_id"`
	VendorID  uint           `gorm:"not null;index" json:"vendor_id"`
	Rating    float64        `gorm:"not null" json:"rating"`
	Comment   string         `gorm:"type:text" json:"comment"`
	Images    string         `gorm:"type:text" json:"images"` // JSON array
	IsActive  bool           `gorm:"default:true" json:"is_active"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`

	// Relationships
	User   User   `gorm:"foreignKey:UserID" json:"user,omitempty"`
	Vendor Vendor `gorm:"foreignKey:VendorID" json:"vendor,omitempty"`
}
