import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";

const productList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 450000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Running",
    price: 250000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 230000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Running",
    price: 440000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn Product 5",
    category: "Running",
    price: 550000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Product 6",
    category: "Running",
    price: 650000,
    imgUrl: "product-6.png",
  },
];

const ProductsSection = () => {
  return (
    <section
      id="products-section"
      className="container mx-auto mt-20 lg:mt-32 mb-32 lg:mb-52 px-4 lg:px-0"
    >
      <h2 className="font-bold italic text-3xl lg:text-4xl text-center mb-8 lg:mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {productList.map((product, index) => (
          <Link
            href={`/product/${product.name}`}
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300 flex flex-col group"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                <FiPlus size={24} />
              </Button>
            </div>

            <div className="px-1">
              <h3 className="font-medium text-base lg:text-lg mb-1 mt-4 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-4 lg:mb-8 gap-1">
                <div className="text-sm lg:text-base text-gray-500">
                  {product.category}
                </div>
                <div className="font-semibold text-primary">
                  {priceFormatter(product.price)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
