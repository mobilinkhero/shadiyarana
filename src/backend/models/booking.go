package models

import (
	"time"

	"gorm.io/gorm"
)

type Booking struct {
	ID           uint           `gorm:"primaryKey" json:"id"`
	UserID       uint           `gorm:"not null;index" json:"user_id"`
	VendorID     uint           `gorm:"not null;index" json:"vendor_id"`
	EventType    string         `gorm:"size:100" json:"event_type"`
	EventDate    time.Time      `json:"event_date"`
	GuestCount   int            `json:"guest_count"`
	Services     string         `gorm:"type:text" json:"services"` // JSON array
	Requirements string         `gorm:"type:text" json:"requirements"`
	Status       string         `gorm:"size:50;default:'pending'" json:"status"` // pending, confirmed, cancelled, completed
	TotalAmount  float64        `json:"total_amount"`
	Notes        string         `gorm:"type:text" json:"notes"`
	CreatedAt    time.Time      `json:"created_at"`
	UpdatedAt    time.Time      `json:"updated_at"`
	DeletedAt    gorm.DeletedAt `gorm:"index" json:"-"`

	// Relationships
	User   User   `gorm:"foreignKey:UserID" json:"user,omitempty"`
	Vendor Vendor `gorm:"foreignKey:VendorID" json:"vendor,omitempty"`
}
