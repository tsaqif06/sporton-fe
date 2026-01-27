import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategoryTableProps = {
  categories: Category[];
  onDelete?: (id: string) => void;
  onEdit?: (category: Category) => void;
};

const CategoryTable = ({categories, onDelete, onEdit}: TCategoryTableProps) => {
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
            {categories.map((data) => (
              <tr
                key={data._id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-6 py-4 font-medium">
                  <div className="flex gap-2 items-center">
                    <div className="aspect-square bg-gray-100 rounded-md w-13 h-13">
                      <Image
                        src={getImageUrl(data.imageUrl)}
                        width={52}
                        height={52}
                        alt={data.name}
                        className="aspect-square object-contain"
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {data.description}
                </td>
                <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600 whitespace-nowrap">
                  <button
                    className="cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => onEdit?.(data)}
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    className="cursor-pointer hover:text-red-600 transition-colors"
                    onClick={() => onDelete?.(data._id)}
                  >
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
