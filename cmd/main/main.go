package main

import (
	"log"
	"net/http"

	"github.com/M4TT1-Coder/Hospital_manager/logic/routes"
	"github.com/gorilla/mux"
)

func main() {
	// envErr := godotenv.Load(".env")
	// if envErr != nil {
	// 	fmt.Printf("could not load environment")
	// }
	r := mux.NewRouter()
	routes.AllRoutes(r)
	http.Handle("/", r)
	println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
