"use client";

import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { AddItemToCart } from "@/lib/actions/cart.actions";
import { Plus } from "lucide-react";


const AddToCart = ({item}: {item: CartItem}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();


  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await AddItemToCart(item);

      if(!res.success) { 
        toast.error(res.message)
        return
      }

      // Handle Success (e.g., update cart state, show success message)
      toast.success(`${res.item.name} added to cart!`, {
        action: {
          label: "Go To Cart",
          onClick: () => router.push("/cart")
        }
      });
    })
  }
  

  return(
  <Button
    variant="outline"
    className="text-white w-full"
    onClick={handleAddToCart}
    disabled={isPending}
  >
    {isPending ? "Adding..." : <><Plus className="w-5 h-5" /> Add To Cart</>}
  </Button>
 )
}
 
export default AddToCart;