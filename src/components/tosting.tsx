"use client"

import { useToast } from "../hooks/use-toast"
import { Button } from "@/components/ui/button"


export function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Excelente hemos actualizado tus color",
          description: "El color elegido es: ", 

        })
      }}
    >
      Show Toast
    </Button>
  )
}
