import axios from '../util/axios'

class OrderService {
    async save(order, token) {
        const res = await axios.post(`/order?token=${token}`, order)
        return res.data
    }

    async list(token) {
        const res = await axios.get(`/order?token=${token}`)
        return res.data
    }

    async detail(id, token) {
        const res = await axios.get(`/order/${id}?token=${token}`)
        return res.data
    }
}

const orderService = new OrderService()
export default orderService