import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
const Checkout = () => {
  return (
    <main className="bg-gray-100 min-h-screen px-4 lg:px-0">
      <div className="max-w-5xl mx-auto py-12 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-11">
          Checkout Now
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </main>
  );
};

export default Checkout;