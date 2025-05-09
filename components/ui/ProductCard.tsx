import formaCurrency from "@/src/utils"
import { Product } from "@prisma/client"
import AddProductButton from "./AddProductButton"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}
export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="border bg-white relative">

            <Image
                width={400}
                height={500}
                src={`/products/${product.image}.jpg`}
                alt={`Imagen platillo ${product.name}`}
            />

            <div className="p5">
                <h3 className="text-2xl font-bold">
                    {product.name}
                </h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formaCurrency(product.price)}
                </p>
               <AddProductButton
                    product={product}
               />

                    </div>

        </div>
    )
}