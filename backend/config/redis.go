package config

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/redis/go-redis/v9"
)

var RedisClient *redis.Client
var ctx = context.Background()

func ConnectRedis() {
	// Skip Redis if not configured
	redisHost := os.Getenv("REDIS_HOST")
	redisPort := os.Getenv("REDIS_PORT")
	
	if redisHost == "" || redisPort == "" {
		log.Println("Redis not configured, skipping...")
		return
	}

	RedisClient = redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%s", redisHost, redisPort),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       0,
	})

	_, err := RedisClient.Ping(ctx).Result()
	if err != nil {
		log.Println("Warning: Failed to connect to Redis:", err)
		log.Println("Continuing without Redis cache...")
		RedisClient = nil
		return
	}

	log.Println("Redis connected successfully")
}
