package routes

import (
	"github.com/M4TT1-Coder/Hospital_manager/logic/Controller"
	"github.com/gorilla/mux"
)

// Add all routes for a http requests here
var AllRoutes = func(router *mux.Router) {
	router.HandleFunc("/patient/create/", Controller.CreatePatient).Methods("POST")
	router.HandleFunc("/patient/byname/{name}", Controller.GetPatientByName).Methods("GET")
	router.HandleFunc("/patient/delete/{name}", Controller.DeletePatientByName).Methods("DELETE")
	router.HandleFunc("/patient/update/{name}", Controller.UpdatePatientByName).Methods("UPDATE")
	router.HandleFunc("/illness/create/", Controller.CreateIllness).Methods("POST") //Methods("CREATE")
	router.HandleFunc("/illness/get/{name}", Controller.GetIllnessByName).Methods("GET")
	router.HandleFunc("/illness/delete/{name}", Controller.DeleteIllnessByName).Methods("DELETE")
	router.HandleFunc("/illness/update/{name}", Controller.UpdateIllnessByName).Methods("UPDATE")
}
