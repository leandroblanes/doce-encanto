import AsyncStorage from '@react-native-async-storage/async-storage'
import eventService, { LOGIN, LOGOUT } from "./eventService"

class SessionService {
    #data = {
        logged: false,
        user: null,
        users: []
    }

    constructor() {
        this.load()
    }

    async load() {
        const json = await AsyncStorage.getItem('sessionData')
        if (!json)
            return

        this.#data = JSON.parse(json)
        if (this.#data.logged)
            eventService.notify(LOGIN)
    }

    async save() {
        //await AsyncStorage.setItem('sessionData', JSON.stringify(this.#data))
    }

    async login(email, password) {
        const user = this.#data.users.find(el => el.email == email)
        if (!user)
            return false

        if (user.password != password)
            return false

        this.#data.logged = true
        this.#data.user = user
        eventService.notify(LOGIN)
    }

    async logout() {
        this.#data.logged = false
        this.#data.user = null
        eventService.notify(LOGOUT)
    }

    async register(email, name, phone, password) {
        const user = this.#data.users.find(el => el.email == email)
        if (user)
            throw 'Já existe um usuário com este e-mail'

        this.#data.users.push({
            email, name, phone, password
        })
        await this.save()
    }

    get logged() { return this.#data.logged }
    get user() { return this.#data.user }
}

const sessionService = new SessionService()
export default sessionService