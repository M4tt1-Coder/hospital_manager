package routes

import (
	"github.com/M4TT1-Coder/Hospital_manager/logic/Controller"
	"github.com/gorilla/mux"
)

// Add all routes for a http requests here
var AllRoutes = func(router *mux.Router) {
	router.HandleFunc("/patient/create/", Controller.CreatePatient).Methods("POST") //!!for testing
	router.HandleFunc("/patient/get/{name}", Controller.GetPatientByName).Methods("GET")
	router.HandleFunc("/patient/delete/{name}", Controller.DeletePatientByName).Methods("GET") //Leave method as GEt not DELETE -> the browser does an extra Preflight-Aufruf
	//https://support.zendesk.com/hc/de/articles/4408881672730-Wie-kann-ich-CORS-Fehler-beheben-
	router.HandleFunc("/patient/update/", Controller.UpdatePatientByName).Methods("PUT") //Methods("UPDATE")
	router.HandleFunc("/patient/get_all/", Controller.GetAll_Patients).Methods("GET")
	router.HandleFunc("/illness/create/", Controller.CreateIllness).Methods("POST") //Methods("CREATE")
	router.HandleFunc("/illness/get/{name}", Controller.GetIllnessByName).Methods("GET")
	router.HandleFunc("/illness/delete/{name}", Controller.DeleteIllnessByName).Methods("GET")
	router.HandleFunc("/illness/update/", Controller.UpdateIllnessByName).Methods("PUT")
	router.HandleFunc("/illness/get_all/", Controller.GetAll_Illnesses).Methods("GET")

	//handle static html files
	//router.HandleFunc("/", Controller.OpenPatientPage).Methods("GET")
	//router.HandleFunc("/patient/", File_Server.ServePatientFile).Methods("GET")

	//add some routes for all html pages

	//test space
	//router.HandleFunc("/patient/update/", Controller.UpdatePatientByName).Methods("PUT")

}
