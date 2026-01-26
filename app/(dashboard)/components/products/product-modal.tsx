import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="max-h-[70vh] md:max-h-none overflow-y-auto pr-2 custom-scrollbar">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-7">
            <div className="w-full md:w-80">
              <ImageUploadPreview
                label="Product Image"
                value={imagePreview}
                onChange={(file) => {
                  setImageFile(file);
                  setImagePreview(URL.createObjectURL(file));
                }}
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="input-group-admin">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="e. g. Running Shoes"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-group-admin">
                  <label htmlFor="productPrice">Price (IDR)</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="e. g. 500000"
                  />
                </div>
                <div className="input-group-admin">
                  <label htmlFor="stock">Stock</label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    placeholder="e. g. 100"
                  />
                </div>
              </div>

              <div className="input-group-admin">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" defaultValue="">
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="running">Running</option>
                  <option value="football">Football</option>
                </select>
              </div>
            </div>
          </div>

          <div className="input-group-admin">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={5}
              className="w-full"
              placeholder="Product Details..."
            ></textarea>
          </div>

          <Button className="w-full md:w-auto md:ml-auto mt-3 rounded-lg">
            Create Product
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
