import AsyncStorage from '@react-native-async-storage/async-storage'
import eventService, { LOGIN, LOGOUT, LOAD } from "./eventService"
import cartService from './cartService'

const initialData = {
    logged: false,
    user: null,
    lastUserId: 0,
    users: [{
        id: 1,
        name: 'John Smith',
        email: 'john@gmail.com',
        phone: '(12) 99999-9999',
        password: '123'
    }],
    lastOrderId: 0,
    orders: []
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

        console.log('load', this.#data)
        //this.#data.lastOrderId = 0
        // this.#data.orders[0].date = new Date(2022, 0, 14, 10, 0)
        // this.#data.orders[1].date = new Date(2022, 0, 14, 11, 0)
        // this.#data.orders[2].date = new Date(2022, 0, 15, 10, 0)
        // this.#data.users[0].id = 1
        // this.#data.users[1].id = 2
        // this.#data.logged = false
        //await this.save()

        eventService.notify(LOAD)
    }

    async save() {
        await AsyncStorage.setItem('sessionData', JSON.stringify(this.#data))
    }

    async login(email, password) {
        const user = this.#data.users.find(el => el.email == email)
        if (!user)
            return false

        if (user.password != password)
            return false

        this.#data.logged = true
        this.#data.user = user
        await this.save()
        eventService.notify(LOGIN)
        return true
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

    async saveOrder(wantChange, change) {
        const newId = ++this.#data.lastOrderId

        this.#data.orders.push({
            id: newId,
            date: new Date(),
            userId: this.user.id,
            items: cartService.items.map(el => ({
                productId: el.productId,
                name: el.product.name,
                price: el.product.price,
                quantity: el.quantity
            })),
            totalPrice: cartService.totalPrice,
            wantChange,
            change
        })

        cartService.clear()
        await this.save()

        return newId
    }

    async findOrder(id) {
        return this.#data.orders.find(el => el.id == id)
    }

    get logged() { return this.#data.logged }
    get user() { return this.#data.user }
    get users() { return this.#data.users }
    get orders() { return this.#data.orders }
}

const sessionService = new SessionService()
export default sessionService