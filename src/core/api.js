import axios from "axios";

export async function searchImages(searchTerm) {
    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers: {
                Authorization: 'Client-ID IN9sAeCF1qBQmYW60Ged7MDqzPjG8qWzdOan2MYT-Vk'
            },
            params: {
                query: searchTerm
            }
        });
    return response.data.results;
};

export async function getBooks() {
    const response = await axios.get('http://localhost:3001/books');
    return response.data;
};

export async function createBook(book) {
    const response = await axios.post('http://localhost:3001/books', book);
    return response.data;
};

export async function editBook(id, book) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, book);
    return response.data;
};

export async function deleteBook(id) {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    return response.data;
};


