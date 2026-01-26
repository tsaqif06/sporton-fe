import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Account">
      <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="e. g. Mandiri, BCA, BRI"
                className="w-full"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="123124344234234"
                className="w-full"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountName">Account Name / Holder</label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                placeholder="Holder Name"
                className="w-full"
              />
            </div>
          </div>

          <Button className="w-full md:w-auto md:ml-auto mt-3 rounded-lg">
            Create Bank Account
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
