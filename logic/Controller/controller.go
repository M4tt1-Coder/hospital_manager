package Controller

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/M4TT1-Coder/Hospital_manager/logic/models"
	"github.com/gorilla/mux"
)

// functions for patient model
func CreatePatient(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var p models.Patient
	err := decoder.Decode(&p)
	if err != nil {
		log.Printf("Error decoding: %v", err)
	}

	pa := p.CreatePatient()
	res, _ := json.Marshal(pa)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAll_Patients(w http.ResponseWriter, r *http.Request) {
	patients := models.GetAllPatients()
	res, _ := json.Marshal(patients)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetPatientByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"] //maybe when its needed do a strconx to string here
	patient, _ := models.GetPatientByName(name)
	res, _ := json.Marshal(patient)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeletePatientByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	patient := models.DeletePatientByName(name)
	res, _ := json.Marshal(patient)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdatePatientByName(w http.ResponseWriter, r *http.Request) {
	// vars := mux.Vars(r)
	// name := vars["name"]
	//just usefull when parameters are served in the urlpath
	decoder := json.NewDecoder(r.Body)
	var vars map[string]string
	err := decoder.Decode(&vars)
	if err != nil {
		log.Printf("Error decoding: %v", err)
	}
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
	name := vars["name"]
	i := models.UpdatePatientByName(name, age, rm_num, ill)
	res, _ := json.Marshal(i)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

// functions for illness model
func CreateIllness(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var ill models.Illness
	err := decoder.Decode(&ill)
	if err != nil {
		log.Printf("Error decoding: %v", err)
	}

	illness := ill.CreateIllness()
	res, _ := json.Marshal(illness)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetIllnessByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	i, _ := models.GetIllnessByName(name)
	res, _ := json.Marshal(i)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetAll_Illnesses(w http.ResponseWriter, r *http.Request) {
	illnesses := models.GetAllIllnesses()
	res, _ := json.Marshal(illnesses)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteIllnessByName(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	name := vars["name"]
	p := models.DeleteIllnessByName(name)
	res, _ := json.Marshal(p)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateIllnessByName(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var vars map[string]string
	err := decoder.Decode(&vars)
	if err != nil {
		log.Printf("Error decoding: %v", err)
	}
	name := vars["name"]
	kind := vars["kind"]
	//be careful with the json body of the request the
	//field 'can_be_healed' must be a string
	cbh, err := strconv.ParseBool(vars["can_be_healed"])
	if err != nil {
		http.Error(w, err.Error(), http.StatusConflict)
		return
	}
	updatedill := models.UpdateIllnessByName(name, kind, cbh)
	res, _ := json.Marshal(updatedill)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func OpenPatientPage(w http.ResponseWriter, r *http.Request) {
	// if r.URL.Path != "/patients.html" {
	// 	r.URL.Path = "/patients.html"
	// }
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	http.ServeFile(w, r, "page_background/html/patients.html")
}

// testing area for functions
// func TestCreatePatient(w http.ResponseWriter, r *http.Request) {
// 	decoder := json.NewDecoder(r.Body)
// 	var p models.Patient
// 	err := decoder.Decode(&p)
// 	if err != nil {
// 		log.Printf("Error decoding: %v", err)
// 	}

// 	pa := p.CreatePatient()
// 	res, _ := json.Marshal(pa)
// 	w.WriteHeader(http.StatusOK)
// 	w.Write(res)
// }

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
