package main

import (
	"log"
	"net/http"

	"github.com/M4TT1-Coder/Hospital_manager/logic/routes"
	"github.com/gorilla/handlers"
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

	//delete when using svelte
	fs := http.FileServer(http.Dir("./static/"))
	r.PathPrefix("/").Handler(http.StripPrefix("/", fs))

	//log.Fatal(http.ListenAndServe(":8080", r))

	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Accept", "Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization"}),
	)(r)))

	//test how I can serve http files
	//-> https://www.alexedwards.net/blog/serving-static-sites-with-go
}

//possibilities to serve static html files:
//1) use html templates -> https://hakk.dev/docs/golang-html-template/
//2) use PathPrefix of mux gorilla and call the files by your own
