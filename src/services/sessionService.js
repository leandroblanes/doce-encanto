import AsyncStorage from '@react-native-async-storage/async-storage'
import eventService, { LOGIN, LOGOUT, LOAD } from "./eventService"

const initialData = {
    logged: false,
    client: null,
    token: '',
}

class SessionService {
    #data = initialData

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

        eventService.notify(LOAD)
    }

    async save() {
        await AsyncStorage.setItem('sessionData', JSON.stringify(this.#data))
    }

    async login(client, token) {
        this.#data.client = client
        this.#data.token = token
        this.#data.logged = true
        await this.save()

        eventService.notify(LOGIN)
    }

    async logout() {
        this.#data.client = null
        this.#data.token = null
        this.#data.logged = false
        await this.save()

        eventService.notify(LOGOUT)
    }

    get logged() { return this.#data.logged }
    get token() { return this.#data.token }
    get client() { return this.#data.client }

    get orders() { return this.#data.orders }
}

const sessionService = new SessionService()
export default sessionService