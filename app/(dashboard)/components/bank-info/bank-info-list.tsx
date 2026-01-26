import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
  {
    bankName: "BCA",
    accountNumber: "123123",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "Mandiri",
    accountNumber: "1212312313123",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "BRI",
    accountNumber: "1123123123",
    accountName: "PT SportOn Digital Indonesia",
  },
];

const BankInfoList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {bankData.map((data, index) => (
        <div
          className="bg-white rounded-lg border border-gray-200 flex flex-col justify-between"
          key={index}
        >
          <div className="flex justify-between p-5 items-start">
            <div className="flex gap-3 items-center">
              <div className="bg-blue-50 text-blue-600 rounded-lg w-12 h-12 flex-shrink-0 flex justify-center items-center">
                <FiCreditCard size={24} />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">
                  {data.bankName}
                </div>
                <div className="text-xs opacity-50">Bank Transfer</div>
              </div>
            </div>
            <div className="flex gap-3 text-gray-500">
              <button className="cursor-pointer hover:text-blue-600 transition-colors">
                <FiEdit2 size={18} />
              </button>
              <button className="cursor-pointer hover:text-red-600 transition-colors">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>

          <div className="px-5 py-4 font-medium">
            <div className="text-[10px] tracking-wider opacity-50 uppercase">
              Account Number
            </div>
            <div className="text-lg font-semibold break-all">
              {data.accountNumber}
            </div>
          </div>

          <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-3 text-xs rounded-b-lg">
            <span className="opacity-50 font-medium">Holder:</span>
            <span className="ml-1 font-semibold text-gray-700">
              {data.accountName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoList;
