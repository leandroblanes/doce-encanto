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
}

const clientService = new ClientService()
export default clientService