package models

import (
	"github.com/M4TT1-Coder/Hospital_manager/logic/dbHandler"
	//"gorm.io/gorm"
	"github.com/jinzhu/gorm"
)

// Add a global database connection
var db *gorm.DB

type Illness struct {
	gorm.Model
	Name          string `gorm:"name" json:"name"`
	Kind          string `gorm:"kind" json:"kind"`
	Can_be_healed bool   `gorm:"can_be_healed" json:"can_be_healed"`
}

type Patient struct {
	gorm.Model
	Name       string `gorm:"Name" json:"name"`
	Age        int64  `gorm:"Age" json:"age"`
	Roomnumber int64  `gorm:"Roomnumber" json:"roomnumber"`
	Illness    string `gorm:"Illness" json:"illness"`
}

func init() {
	dbHandler.Connect()
	db = dbHandler.GetDB()
	db.AutoMigrate(&Patient{})
	db.AutoMigrate(&Illness{})
}

func UpdatePatientByName(name string, age int64, rm_num int64, ill string) *Patient {
	p, _ := GetPatientByName(name)
	if age != 0 {
		p.Age = age
	}
	if rm_num != 0 {
		p.Roomnumber = rm_num
	}
	if ill != "" {
		p.Illness = ill
	}
	db.Save(&p)
	return p
}

func (p *Patient) CreatePatient() *Patient {
	db.NewRecord(p)
	db.Create(&p)
	return p
}

func (i *Illness) CreateIllness() *Illness {
	db.NewRecord(i)
	db.Create(&i)
	return i
}

func GetAllPatients() []Patient {
	var patients []Patient
	db.Find(&patients)
	return patients
}

func GetAllIllnesses() []Illness {
	var illnesses []Illness
	db.Find(&illnesses)
	return illnesses
}

func GetPatientByName(n string) (*Patient, *gorm.DB) {
	var patient Patient
	db := db.Where("Name = ?", n).Find(&patient)
	return &patient, db
}

func GetIllnessByName(name string) (Illness, *gorm.DB) {
	var illness Illness
	d := db.Where("Name = ?", name).Find(&illness)
	return illness, d
}

func DeletePatientByName(name string) Patient {
	var patient Patient
	db.Where("Name = ?", name).Delete(patient)
	return patient
}

func DeleteIllnessByName(name string) Illness {
	var illness Illness
	db.Where("Name = ?", name).Delete(illness)
	return illness
}

func UpdateIllnessByName(name string, kind string, cbh bool) Illness {
	ill, _ := GetIllnessByName(name)
	if kind != "" {
		ill.Kind = kind
	}
	if cbh != ill.Can_be_healed {
		ill.Can_be_healed = cbh
	}
	db.Save(&ill)
	return ill
}
