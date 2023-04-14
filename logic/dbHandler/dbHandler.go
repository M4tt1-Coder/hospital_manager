package dbHandler

import (
	//"gorm.io/driver/mysql"
	//"gorm.io/gorm"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db               *gorm.DB
	connectionstring = "root:MySqLt3sT25#@tcp(127.0.0.1:3306)/hospital?charset=utf8&parseTime=true&loc=Local"
)

func Connect() {

	//d, err := gorm.Open(mysql.Open(connectionstring), &gorm.Config{})
	d, err := gorm.Open("mysql", connectionstring)
	if err != nil {
		panic("Could not connect to database")
	}
	db = d
}

func GetDB() *gorm.DB {
	return db
}
