package main

import (
	"log"
	"net/http"

	"github.com/M4TT1-Coder/Hospital_manager/logic/routes"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	routes.AllRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8080", r))
	println("Server is running on port 8080")
}
