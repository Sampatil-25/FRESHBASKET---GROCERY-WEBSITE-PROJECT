
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CreditCard, 
  Truck, 
  MapPin,
  Clock,
  User,
  Phone
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const PaymentOptions = [
  {
    id: "card",
    title: "Credit / Debit Card",
    icon: CreditCard,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    icon: Truck,
  },
];

const DeliveryOptions = [
  {
    id: "standard",
    title: "Standard Delivery",
    description: "Delivery in 2-3 hours",
    price: 3.99,
    icon: Clock,
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "Delivery in 30-45 minutes",
    price: 6.99,
    icon: Truck,
  },
];

const Checkout = () => {
  const { state, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState(PaymentOptions[0].id);
  const [deliveryOption, setDeliveryOption] = useState(DeliveryOptions[0].id);
  
  const selectedDelivery = DeliveryOptions.find(option => option.id === deliveryOption);
  const deliveryFee = selectedDelivery ? selectedDelivery.price : DeliveryOptions[0].price;
  const tax = totalPrice * 0.07;
  const finalTotal = totalPrice + deliveryFee + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
            <Button onClick={() => navigate("/shop")} className="bg-grocery-primary hover:bg-grocery-dark">
              Browse Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Delivery Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-grocery-primary" />
                  Delivery Address
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <Input id="name" type="text" className="pl-10" placeholder="John Doe" required />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="relative">
                      <Input id="phone" type="tel" className="pl-10" placeholder="(123) 456-7890" required />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="address" className="text-sm font-medium text-gray-700">Street Address</label>
                    <Input id="address" type="text" placeholder="123 Main St, Apt 4B" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                    <Input id="city" type="text" placeholder="New York" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="zipcode" className="text-sm font-medium text-gray-700">ZIP Code</label>
                    <Input id="zipcode" type="text" placeholder="10001" required />
                  </div>
                </div>
              </div>
              
              {/* Delivery Options */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-grocery-primary" />
                  Delivery Options
                </h2>
                
                <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="space-y-3">
                  {DeliveryOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-grocery-primary">
                      <RadioGroupItem value={option.id} id={`delivery-${option.id}`} />
                      <Label htmlFor={`delivery-${option.id}`} className="flex items-center flex-grow cursor-pointer">
                        <div className="flex items-center justify-center bg-gray-100 rounded-full h-10 w-10 mr-3">
                          <option.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium">{option.title}</p>
                          <p className="text-sm text-gray-500">{option.description}</p>
                        </div>
                        <div className="font-medium">${option.price.toFixed(2)}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-grocery-primary" />
                  Payment Method
                </h2>
                
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  {PaymentOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:border-grocery-primary">
                      <RadioGroupItem value={option.id} id={`payment-${option.id}`} />
                      <Label htmlFor={`payment-${option.id}`} className="flex items-center flex-grow cursor-pointer">
                        <div className="flex items-center justify-center bg-gray-100 rounded-full h-10 w-10 mr-3">
                          <option.icon className="h-5 w-5 text-gray-600" />
                        </div>
                        <p className="font-medium">{option.title}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">Card Number</label>
                      <Input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required={paymentMethod === "card"} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">Expiry Date</label>
                        <Input id="expiryDate" type="text" placeholder="MM/YY" required={paymentMethod === "card"} />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="cvv" className="text-sm font-medium text-gray-700">CVV</label>
                        <Input id="cvv" type="text" placeholder="123" required={paymentMethod === "card"} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="lg:hidden">
                <OrderSummary 
                  totalPrice={totalPrice} 
                  deliveryFee={deliveryFee} 
                  tax={tax} 
                  finalTotal={finalTotal} 
                />
                <Button type="submit" className="w-full bg-grocery-primary hover:bg-grocery-dark mt-4">
                  Place Order
                </Button>
              </div>
            </form>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <OrderSummary 
                totalPrice={totalPrice} 
                deliveryFee={deliveryFee} 
                tax={tax} 
                finalTotal={finalTotal} 
              />
              <Button type="submit" onClick={handleSubmitOrder} className="w-full bg-grocery-primary hover:bg-grocery-dark mt-4">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper component for order summary
const OrderSummary = ({ 
  totalPrice, 
  deliveryFee, 
  tax, 
  finalTotal 
}: { 
  totalPrice: number; 
  deliveryFee: number; 
  tax: number; 
  finalTotal: number;
}) => (
  <>
    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Delivery Fee</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <Separator />
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>
    </div>
  </>
);

export default Checkout;
