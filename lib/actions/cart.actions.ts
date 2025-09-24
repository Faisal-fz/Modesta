"use server";

import { CartItem } from "@/types";
import { success } from "zod";

export async function addItemToCart(item: CartItem) {
  return {
    success: false,
    message: "Item could not be added to cart",
  };
}
