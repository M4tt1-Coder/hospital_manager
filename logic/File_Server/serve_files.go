package File_Server

import (
	"html/template"
	"net/http"
)

type contextData map[string]interface{}

func ServePatientFile(w http.ResponseWriter, r *http.Request) {
	// tmpl := template.Must(template.ParseFiles("./page_background/html/create_patient.html"))

	tmpl := template.Must(template.ParseFiles("create_patient.html"))

	data := contextData{}

	tmpl.Execute(w, data)
}
