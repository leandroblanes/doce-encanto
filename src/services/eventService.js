class EventService {
    constructor() {
        this.subscribers = []
        this.actualSubscriberId = 0
    }

    subscribe(eventName, callbackFn) {
        const newId = ++this.actualSubscriberId
        this.subscribers.push({
            id: newId,
            eventName,
            callbackFn
        })
        return newId
    }

    unsubuscribe(subscriberId) {
        this.subscribers = this.subscribers.filter(el => el.id != subscriberId)
    }

    notify(eventName) {
        for (const subscriber of this.subscribers.filter(el => el.eventName == eventName))
            subscriber.callbackFn && subscriber.callbackFn()
    }
}

const eventService = new EventService()
export default eventService

export const CART_UPDATED = 'cart_updated'
export const LOGIN = 'login'
export const LOGOUT = 'logout'