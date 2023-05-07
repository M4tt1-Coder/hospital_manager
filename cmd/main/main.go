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

	//where we serve all html files
	// fs := http.FileServer(http.Dir("./page_background/html"))
	// r.PathPrefix("/").Handler((http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	// 	if r.URL.Path == "/" {
	// 		//the default page
	// 		r.URL.Path  = "/patients.hmtl"
	// 	}

	// 	fs.ServeHTTP(w, r)
	// }))).Methods("GET")

	fileserver := http.FileServer(http.Dir("./page_background/html"))
	http.Handle("/patient/", fileserver)

	//__________________

	log.Fatal(http.ListenAndServe(":8080", r))

	//test how I can serve http files
	//-> https://www.alexedwards.net/blog/serving-static-sites-with-go
}
