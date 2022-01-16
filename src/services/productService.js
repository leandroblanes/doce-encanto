import axios from '../util/axios'

class ProductService {
    async list(categoryId) {
        const res = await axios.get(`/product/${categoryId}`)
        return res.data
    }
}

const productService = new ProductService()
export default productService