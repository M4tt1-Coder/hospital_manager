package routes

import (
	"github.com/M4TT1-Coder/Hospital_manager/logic/Controller"
	"github.com/M4TT1-Coder/Hospital_manager/logic/File_Server"
	"github.com/gorilla/mux"
)

// Add all routes for a http requests here
var AllRoutes = func(router *mux.Router) {
	router.HandleFunc("/patient/create/", Controller.CreatePatient).Methods("POST") //!!for testing
	router.HandleFunc("/patient/byname/{name}", Controller.GetPatientByName).Methods("GET")
	router.HandleFunc("/patient/delete/{name}", Controller.DeletePatientByName).Methods("DELETE")
	router.HandleFunc("/patient/update/", Controller.UpdatePatientByName).Methods("PUT") //Methods("UPDATE")
	router.HandleFunc("/illness/create/", Controller.CreateIllness).Methods("POST")      //Methods("CREATE")
	router.HandleFunc("/illness/get/{name}", Controller.GetIllnessByName).Methods("GET")
	router.HandleFunc("/illness/delete/{name}", Controller.DeleteIllnessByName).Methods("DELETE")
	router.HandleFunc("/illness/update/", Controller.UpdateIllnessByName).Methods("PUT")

	//handle static html files

	router.HandleFunc("/patient/", File_Server.ServePatientFile).Methods("GET")

	//add some routes for all html pages

	//test space
	//router.HandleFunc("/patient/update/", Controller.UpdatePatientByName).Methods("PUT")

}
