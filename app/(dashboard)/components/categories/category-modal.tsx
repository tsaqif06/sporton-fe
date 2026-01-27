import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useEffect, useState } from "react";
import { Category } from "@/app/types";
import { toast } from "react-toastify";
import {
  createCategory,
  updateCategory,
} from "@/app/services/category.service";
import { getImageUrl } from "@/app/lib/api";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  category?: Category | null;
};

type CategoryFormData = {
  name: string;
  description: string;
};

const CategoryModal = ({
  isOpen,
  onClose,
  onSuccess,
  category,
}: TCategoryModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    description: "",
  });

  const isEditMode = !!category;

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
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      if (imageFile) {
        data.append("image", imageFile);
      }

      if (isEditMode) {
        await updateCategory(category._id, data);
      } else {
        await createCategory(data);
      }

      setFormData({
        name: "",
        description: "",
      });
      setImageFile(null);
      setImagePreview(null);

      toast.success(
        isEditMode
          ? "Category updated successfully"
          : "Category created successfully",
      );

      onSuccess?.();
      onClose?.();
    } catch (error) {
      console.error(
        isEditMode ? "Failed to update category" : "Failed to create category",
        error,
      );
      toast.error(
        isEditMode ? "Failed to update category" : "Failed to create category",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isEditMode && isOpen) {
      setFormData({
        name: category.name,
        description: category.description,
      });
      setImagePreview(
        category.imageUrl ? getImageUrl(category.imageUrl) : null,
      );
    } else if (isOpen) {
      setFormData({
        name: "",
        description: "",
      });
      setImageFile(null);
      setImagePreview(null);
    }
  }, [isOpen, category]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit Category" : "Add New Category"}
    >
      <form
        onSubmit={handleSubmit}
        className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-7">
            <div className="w-full md:w-80">
              <ImageUploadPreview
                label="Category Image"
                value={imagePreview}
                onChange={(file) => {
                  setImageFile(file);
                  setImagePreview(URL.createObjectURL(file));
                }}
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="input-group-admin">
                <label htmlFor="name">Category Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e. g. Running"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group-admin">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="w-full"
                  placeholder="Category Details..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <Button
            className="w-full md:w-auto md:ml-auto mt-3 rounded-lg"
            disabled={isSubmitting}
            type="submit"
          >
            {isEditMode ? "Update Category" : "Create Category"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CategoryModal;
