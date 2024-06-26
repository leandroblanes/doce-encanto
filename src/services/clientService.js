import axios from '../util/axios'

class ClientService {
    async auth(email, password) {
        const res = await axios.post('/client/auth', {
            email, password
        })
        return res.data
    }

    async me(token) {
        const res = await axios.get(`/client/me?token=${token}`)
        return res.data
    }

    async create(client) {
        await axios.post('/client', client)
    }
}

const clientService = new ClientService()
export default clientService