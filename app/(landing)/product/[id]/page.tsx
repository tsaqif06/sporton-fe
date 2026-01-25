import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
  return (
    <main className="container mx-auto py-20 lg:py-40 flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 lg:px-0">
      <div className="bg-primary-light aspect-square w-full lg:min-w-[550px] lg:w-[550px] flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src="/images/products/product-4.png"
          width={550}
          height={550}
          alt="product 4 image"
          className="w-full h-full object-contain p-6 lg:p-10"
        />
      </div>

      <div className="w-full py-0 lg:py-7">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6">
          SportsOn HyperSoccer v2
        </h1>

        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5 font-medium text-sm lg:text-base">
          Football
        </div>

        <p className="leading-relaxed lg:leading-loose mb-6 lg:mb-8 text-gray-600 text-sm lg:text-base">
          The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don't just perform—they make a statement. Experience the
          future of football footwear with v2's enhanced fit and cutting-edge
          traction.
        </p>

        <div className="text-primary text-2xl lg:text-[32px] font-semibold mb-8 lg:mb-12">
          {priceFormatter(458000)}
        </div>

        <div className="mt-auto">
          <ProductActions />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
