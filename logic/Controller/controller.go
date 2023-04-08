package Controller

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/M4TT1-Coder/Hospital_manager/logic/json_parser"
	"github.com/M4TT1-Coder/Hospital_manager/logic/models"
	"github.com/gorilla/mux"
)

// functions for patient model
func CreatePatient(w http.ResponseWriter, r *http.Request) {
	patient := &models.Patient{}
	json_parser.ParseBody(r, patient)
	p := patient.CreatePatient()
	res, _ := json.Marshal(p)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetPatientByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"] //maybe when its needed do a strconx to string here
	patient, _ := models.GetPatientByName(name)
	res, _ := json.Marshal(patient)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeletePatientByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	patient := models.DeletePatientByName(name)
	res, _ := json.Marshal(patient)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdatePatientByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	age, err1 := strconv.ParseInt(vars["age"], 0, 0)
	if err1 != nil {
		http.Error(w, err1.Error(), http.StatusBadRequest)
		return
	}
	rm_num, err2 := strconv.ParseInt(vars["roomnumber"], 0, 0)
	if err2 != nil {
		http.Error(w, err2.Error(), http.StatusBadRequest)
	}
	//get the illness by name but better convert illness passed by the user
	ill := vars["illness"]
	i := models.UpdatePatientByName(name, age, rm_num, ill)
	res, _ := json.Marshal(i)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

// functions for illness model
func CreateIllness(w http.ResponseWriter, r *http.Request) {
	illness := models.Illness{}
	json_parser.ParseBody(r, illness)
	i := illness.CreateIllness()
	res, _ := json.Marshal(i)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetIllnessByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	i, _ := models.GetIllnessByName(name)
	res, _ := json.Marshal(i)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteIllnessByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	p := models.DeleteIllnessByName(name)
	res, _ := json.Marshal(p)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateIllnessByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	kind := vars["kind"]
	cbh, err := strconv.ParseBool(vars["can_be_healed"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusConflict)
		return
	}
	updatedill := models.UpdateIllnessByName(name, kind, cbh)
	res, _ := json.Marshal(updatedill)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

//helper functions

// func SetNewPatientInfo(props map[string]string, p models.Patient) models.Patient {
// 	age, err1 := strconv.ParseInt(props["age"], 0, 0)
// 	roomnumber, err2 := strconv.ParseInt(props["roomnumber"], 0, 0)
// 	var ill = models.Illness{}
// 	json_parser.ParseBody(props["illness"], ill) //look for a parsing method for the illness

// 	if err2 != nil {
// 		p.Roomnumber = int(roomnumber)
// 	}
// 	if err1 != nil {
// 		p.Age = int(age)
// 	}
// 	if ill != nil {
// 		p.illness = ill
// 	}
// }
