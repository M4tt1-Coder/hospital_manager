package dbHandler

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var (
	db               *gorm.DB
	connectionstring = "hospital.db"
)

func Connect() {
	d, err := gorm.Open(sqlite.Open(connectionstring), &gorm.Config{})
	if err != nil {
		panic("Could not connect to database")
	}
	d.AutoMigrate(models)
	db = d
}

func GetDB() *gorm.DB {
	return db
}
