import axios from '../util/axios'

class CategoryService {
    async list() {
        const res = await axios.get('/category')
        return res.data
    }
}

const categoryService = new CategoryService()
export default categoryService