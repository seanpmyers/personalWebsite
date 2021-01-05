package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./personal")))
	log.Fatal(http.ListenAndServe(":4568", nil))
}
