import mock from './data/category'

class CategoryService {
    constructor() {

    }

    async list() {
        return mock
    }
}

const categoryService = new CategoryService()
export default categoryService