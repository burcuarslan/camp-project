import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getById(productId){
        return axios.get(`http://localhost:8080/api/products/getById?id=${productId}`)
    }
}