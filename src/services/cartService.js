import eventService, { CART_UPDATED } from "./eventService"

class CartService {
    constructor(eventService) {
        this.eventService = eventService
        this.items = []
    }

    find(id) {
        return this.items.find(el => el.productId == id)
    }

    add(product, quantity) {
        const item = this.find(product.id)
        if (!item) {
            this.items.push({
                productId: product.id,
                product,
                quantity
            })
        } else {
            item.quantity += quantity
        }
        this.eventService.notify(CART_UPDATED)
    }

    remove(productId) {
        this.items = this.items.filter(el => el.productId != productId)
        this.eventService.notify(CART_UPDATED)
    }

    changeQuantity(productId, quantity) {
        const item = this.find(productId)
        if (item) {
            item.quantity = quantity
            this.eventService.notify(CART_UPDATED)
        }
    }

    get totalQuantity() {
        return this.items.reduce((acc, el) => acc + el.quantity, 0)
    }

    get totalPrice() {
        return this.items.reduce((acc, el) => acc + (el.quantity * el.product.price), 0)
    }
}

const cartService = new CartService(eventService)
export default cartService