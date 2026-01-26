import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/categories/category-running.png",
    description: "lorem ipsum ",
  },
  {
    name: "Football",
    imageUrl: "/images/categories/category-football.png",
    description: "lorem ipsum ",
  },
];

const CategoryTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Category Name
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Description
              </th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((data, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium">
                  <div className="flex gap-2 items-center">
                    <div className="aspect-square bg-gray-100 rounded-md w-13 h-13">
                      <Image
                        src={data.imageUrl}
                        width={52}
                        height={52}
                        alt={data.name}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">{data.description}</td>
                <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600 whitespace-nowrap">
                  <button>
                    <FiEdit2 size={20} />
                  </button>
                  <button>
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
