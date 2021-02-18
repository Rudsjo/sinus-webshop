import axios from 'axios'

export async function fetchProducts() {
    return axios.get('http://localhost:5000/api/products/')
}

export async function registerUser(user) {
    await axios.post('http://localhost:5000/api/register/', {
        name: user.name, 
        email: user.email, 
        password: user.password,
        repeatPassword: user.password,
        adress:{
            street: user.adress.street,
            zip: user.adress.zip,
            city: user.adress.city
        }
    })
}

export async function fetchUser(user) {
    return await axios.post('http://localhost:5000/api/auth/', {email: user.email, password: user.password})   
}

export async function fetchUserHistory(token) {
    return await axios.get('http://localhost:5000/api/orders/', {
        headers: {
            Authorization: token
        }
    })
}

export async function createOrder(token, order) {
    return await axios.post('http://localhost:5000/api/orders/', {items: order}, {
        headers: {
            Authorization: token
        }
    })
}

export async function createProduct(token, product) {
    return await axios.post('http://localhost:5000/api/products', {
        title: product.title,
        price: product.price,
        shortDesc: product.shortDesc,
        longDesc: product.longDesc,
        imgFile: product.imgFile
    },{
    headers: {
        Authorization: token
    }
    })
}

export async function updateProduct(token, product) {
    return await axios({
        method: 'PATCH',
        url: `http://localhost:5000/api/products/${product._id}`,
        headers: {
        Authorization: token
        },
        data: {
            title: product.title, 
            price: Number(product.price),
            shortDesc: product.shortDesc,
            longDesc: product.longDesc,
            imgFile: product.imgFile
        }
    })
}

export async function deleteProduct(token, id) {
    return await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

//Not used but created if needed
export async function fetchProductById(id) {
    return await axios.get(`http://localhost:5000/api/products/${id}`)
}