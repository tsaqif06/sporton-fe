import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-screen px-4 lg:px-0">
      <div className="max-w-5xl mx-auto py-12 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-11">
          Payment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};

export default Payment;
