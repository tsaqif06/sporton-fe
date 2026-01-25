import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({params}: TPageProps) => {
  const { id } = await params;
  const product = await getProductDetail(id);

  return (
    <main className="container mx-auto py-20 lg:py-40 flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 lg:px-0">
      <div className="bg-primary-light aspect-square w-full lg:min-w-[550px] lg:w-[550px] flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src={getImageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
          className="w-full h-full object-contain p-6 lg:p-10"
        />
      </div>

      <div className="w-full py-0 lg:py-7">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6">
          {product.name}
        </h1>

        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5 font-medium text-sm lg:text-base">
          {product.category.name}
        </div>

        <p className="leading-relaxed lg:leading-loose mb-6 lg:mb-8 text-gray-600 text-sm lg:text-base">
         {product.description}
        </p>

        <div className="text-primary text-2xl lg:text-[32px] font-semibold mb-8 lg:mb-12">
          {priceFormatter(product.price)}
        </div>

        <div className="mt-auto">
          <ProductActions product={product} stock={product.stock} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
