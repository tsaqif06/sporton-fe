import Button from "@/app/(landing)/components/ui/button";
import Modal from "./modal";

type TDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteModal = ({ isOpen, onClose, onConfirm }: TDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
      <p className="text-gray-600 leading-relaxed text-center md:text-left">
        Are you sure want to delete this item? If you click delete, it will be
        permanently removed.
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 mt-8">
        <Button
          variant="ghost"
          className="w-full rounded-lg py-6 md:py-2"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button className="w-full rounded-lg py-6 md:py-2" onClick={onConfirm}>
          Yes, delete it
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
