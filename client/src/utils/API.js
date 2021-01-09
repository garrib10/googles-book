import axios from "axios";

export default {
    // Get book from google search 
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

 
    getBooks: function () {
        return axios.get("/api/books");
    },

  
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}