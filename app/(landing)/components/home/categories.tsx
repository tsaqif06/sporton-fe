import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// const categoryList = [
//   {
//     name: "Running",
//     imgUrl: "category-running.png",
//   },
//   {
//     name: "Tennis",
//     imgUrl: "category-tennis.png",
//   },
//   {
//     name: "Basketball",
//     imgUrl: "category-basketball.png",
//   },
//   {
//     name: "Football",
//     imgUrl: "category-football.png",
//   },
//   {
//     name: "Badminton",
//     imgUrl: "category-badminton.png",
//   },
//   {
//     name: "Swimming",
//     imgUrl: "category-swimming.png",
//   },
// ];

type TCategoriesProps = {
  categories: Category[];
}

const CategoriesSection = ({categories}: TCategoriesProps ) => {
  return (
    <section
      id="category-section"
      className="container mx-auto pb-20 px-4 lg:px-0"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link
          href="#"
          className="flex gap-2 text-primary font-medium hover:underline"
        >
          <span>See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 mt-8">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex flex-col justify-center items-center p-4 transition-transform hover:scale-105 cursor-pointer"
            key={category._id}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
              <Image
                src={getImageUrl(category.imageUrl)}
                fill
                alt={category.name}
                className="object-contain"
              />
            </div>
            <div className="text-primary font-medium text-lg md:text-xl text-center">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
