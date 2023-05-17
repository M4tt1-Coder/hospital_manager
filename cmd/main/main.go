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
	r.PathPrefix("/page_background/html/").Handler(http.StripPrefix("/page_background/html/", http.FileServer(http.Dir())))
	//__________________

	log.Fatal(http.ListenAndServe(":8080", r))

	//test how I can serve http files
	//-> https://www.alexedwards.net/blog/serving-static-sites-with-go
}

//possibilities to serve static html files:
//1) use html templates -> https://hakk.dev/docs/golang-html-template/
//2) use PathPrefix of mux gorilla and call the files by your own
