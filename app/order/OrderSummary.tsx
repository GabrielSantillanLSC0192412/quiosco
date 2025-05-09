"use client"
import { useStore } from "@/src/store"


const OrderSummary = () => {


  const order = useStore((state) => state.order)




  return (
    <aside className="lg:hscreen lg:overflow-y-scroll md:w-64 lg:w-96 p5">
        <h1 className=" font-black">Mi Pedido</h1>
        {order.map(item => (
                  <h1> {item.name} </h1>
              ))}
    </aside>
  )
}


export default OrderSummary
