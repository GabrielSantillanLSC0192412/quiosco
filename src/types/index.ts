import { Product } from "@prisma/client";

// Define OrderProducts manually if it doesn't exist in @prisma/client
export type OrderProducts = {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    // Add other fields as per your database schema
};

export type Order = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    // Add other fields as per your database schema
};


export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}


export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}
