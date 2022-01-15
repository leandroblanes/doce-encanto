import BaseScreen from "../BaseScreen"
import Title from "../../components/Title"

function OrdersScreen() {
    return (
        <BaseScreen hideUser>
            <Title text="Pedidos" />
        </BaseScreen>
    )
}

export default OrdersScreen