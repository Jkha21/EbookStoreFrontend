import axios from 'axios';
const BASE_URL_USER = "http://localhost:4000/api/v1/users";
const BASE_URL_BOOKS = "http://localhost:4000/api/v1/book";
const BASE_URL_CART = "http://localhost:4000/api/v1/cart";
const BASE_URL_WISHLIST = "http://localhost:4000/api/v1/wishlist";
const BASE_URL_ORDER = "http://localhost:4000/api/v1/order";


const getAuth = () =>{
    return `Bearer ${localStorage.getItem('accessToken')}`;
};


export const getAllBooks = async(endpoint) =>{
    return await axios.get(`${BASE_URL_BOOKS}/${endpoint}`)
    
};

export const LoginUser = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_USER}/${endpoint}`, payload);
}

export const SignUpUser = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_USER}/${endpoint}`, payload);
}


export const CartList = async(endpoint) =>{
    return await axios.get(`${BASE_URL_CART}/`, {
        headers: {
            Authorization: getAuth()
        }
    });
}

export const UpdateCartItem = async(endpoint, payload) =>{
    return await axios.put(`${BASE_URL_CART}/${endpoint}`, payload, {
            headers: {
                Authorization: getAuth()
            }
        }
    );
}

export const AddItem = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_CART}/${endpoint}`, payload, {
        headers: {
            Authorization: getAuth()
        }
    })
};

export const WishlistItem = async(endpoint, payload) =>{
    return await axios.get(`${BASE_URL_WISHLIST}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    })
};


export const WishlistAddItem = async(endpoint, payload) => {
    return await axios.post(`${BASE_URL_WISHLIST}/${endpoint}`, payload, {
        headers: {
            Authorization: getAuth()
        }
    })
};



export const AddOrderItems = async(endpoint, payload) =>{
    return await axios.post(`${BASE_URL_ORDER}/${endpoint}`, payload, {
        headers: {
            Authorization: getAuth()
        }
    })
};

export const GetOrderItems = async(endpoint) =>{
    return await axios.get(`${BASE_URL_ORDER}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    })
};



export const GetWishlist = async(endpoint) => {
    return await axios.get(`${BASE_URL_WISHLIST}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    })
};


export const GetOrderlist = async(endpoint) => {
    return await axios.get(`${BASE_URL_ORDER}/${endpoint}`, {
        headers: {
            Authorization: getAuth()
        }
    })
};