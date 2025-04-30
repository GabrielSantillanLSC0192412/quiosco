import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/src/lib/prisma";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, price, category } = req.body;


    if (!name || !price || !category) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }


    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          price: parseFloat(price),
          categoryId: parseInt(category),
          image: "01", // Replace with a valid image URL or handle it dynamically
        },
      });


      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al crear el producto." });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido." });
  }
}

