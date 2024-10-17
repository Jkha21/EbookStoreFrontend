import axios from 'axios';
const BASE_URL_USER = "http://localhost:4000/api/v1/users";
const BASE_URL_BOOKS = "http://localhost:4000/api/v1/book";

export const getAllBooks = async(endpoint) =>{
    return await axios.get(`${BASE_URL_BOOKS}/${endpoint}`)
    
};