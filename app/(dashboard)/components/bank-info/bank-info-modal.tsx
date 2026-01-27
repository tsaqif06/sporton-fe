import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import { Bank } from "@/app/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createBank, updateBank } from "@/app/services/bank.service";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  bank?: Bank | null;
};

const BankInfoModal = ({
  isOpen,
  onClose,
  bank,
  onSuccess,
}: TBankInfoModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<Partial<Bank>>({
    bankName: "",
    accountName: "",
    accountNumber: "",
  });

  const isEditMode = !!bank;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isEditMode) {
        await updateBank(bank._id, formData);
      } else {
        await createBank(formData);
      }

      setFormData({
        bankName: "",
        accountName: "",
        accountNumber: "",
      });

      toast.success(
        isEditMode ? "Bank updated successfully" : "Bank created successfully",
      );

      onSuccess?.();
      onClose?.();
    } catch (error) {
      console.error(
        isEditMode ? "Failed to update bank" : "Failed to create bank",
        error,
      );
      toast.error(
        isEditMode ? "Failed to update bank" : "Failed to create bank",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isEditMode && isOpen) {
      setFormData({
        bankName: bank.bankName,
        accountName: bank.accountName,
        accountNumber: bank.accountNumber,
      });
    } else if (isOpen) {
      setFormData({
        bankName: "",
        accountName: "",
        accountNumber: "",
      });
    }
  }, [isOpen, bank]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit Bank Account" : "Add New Bank Account"}
    >
      <form
        onSubmit={handleSubmit}
        className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar"
      >
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
                value={formData.bankName}
                onChange={handleChange}
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
                value={formData.accountNumber}
                onChange={handleChange}
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
                value={formData.accountName}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            className="w-full md:w-auto md:ml-auto mt-3 rounded-lg"
            disabled={isSubmitting}
            type="submit"
          >
            {isEditMode ? "Update Bank Account" : "Create Bank Account"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default BankInfoModal;
