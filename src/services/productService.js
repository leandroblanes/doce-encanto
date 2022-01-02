import mock from './data/product'

class ProductService {
    constructor() {

    }

    async list(categoryId) {
        return mock.filter(el => el.categoryId == categoryId)
    }
}

const productService = new ProductService()
export default productService