class EventService {
    constructor() {
        this.subscribers = []
        this.actualSubscriberId = 0
    }

    subscribe(eventName, callbackFn) {
        const newId = ++this.actualSubscriberId
        console.log(`Assinou com id ${newId} - Assinantes: ${this.subscribers.length}`)
        this.subscribers.push({
            id: newId,
            eventName,
            callbackFn
        })
        return newId
    }

    unsubuscribe(subscriberId) {
        this.subscribers = this.subscribers.filter(el => el.id != subscriberId)
        console.log(`Saiu id ${subscriberId}`)
    }

    notify(eventName) {
        for (const subscriber of this.subscribers.filter(el => el.eventName == eventName))
            subscriber.callbackFn && subscriber.callbackFn()
    }
}

const eventService = new EventService()
export default eventService

export const CART_UPDATED = 'cart_updated'