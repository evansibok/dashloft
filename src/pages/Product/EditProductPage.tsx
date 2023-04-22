import { Link } from "react-router-dom";
import { useProduct } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../state";
import { baseURL } from "../../utils/constants";
import { modifyProduct } from "../../state/products/thunks";

const EditProductPage = () => {
  const dispatch = useAppDispatch();
  const { product, loading } = useProduct();
  const [editForm, setEditForm] = useState({
    name: false,
    description: false,
  });
  const [productForm, setProductForm] = useState({
    name: product?.name || "",
    description: product?.description || "",
  });

  const onHandleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductForm({
      ...productForm,
      [evt.target.name]: evt.target.value,
    });
  };

  console.log("productForm->", productForm);

  return (
    <div className=" flex flex-col gap-5 w-full px-3">
      <Link
        to="/product"
        className="bg-indigo-500 text-white text-sm py-1 px-2 rounded-md flex self-end"
      >
        View Product
      </Link>

      <div className="bg-white flex flex-col w-full border border-gray-200 rounded-md gap-3 px-2 py-2 mt-3">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="w-full h-36 bg-center bg-no-repeat bg-contain border-2 border-indigo-700 rounded-md"
            style={{
              backgroundImage: `url('${product?.picture}')`,
            }}
          />

          {/* Edit name and description */}
          {editForm.name && editForm.description ? (
            <>
              <input
                type="text"
                name="name"
                className="text-sm pl-2 border-2 border-indigo-400 rounded-md h-10"
                placeholder={productForm.name}
                value={productForm.name}
                onChange={onHandleChange}
              />
              <p className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start">
                {product?.type?.name}
              </p>
              <textarea
                rows={10}
                name="description"
                className="text-sm p-2 border-2 border-indigo-400 rounded-md"
                placeholder={productForm.description}
                value={productForm.description}
                onChange={onHandleChange}
              />
              <div className="flex gap-2 self-end items-center">
                {loading && (
                  <span className="text-xs text-indigo-400">Saving...</span>
                )}
                <button
                  className="text-indigo-500 text-xs py-1 px-2 rounded-md"
                  onClick={() => {
                    setEditForm({
                      ...editForm,
                      name: false,
                      description: false,
                    });
                    setProductForm({
                      ...productForm,
                      name: product?.name,
                    });
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-gray-200 text-indigo-500 text-xs py-1 px-2 rounded-md"
                  onClick={async () => {
                    await modifyProduct(dispatch, baseURL, 6781, productForm);
                    setEditForm({
                      ...editForm,
                      name: false,
                      description: false,
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-base">{product?.name}</h3>
                <PencilSquareIcon
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() =>
                    setEditForm({ ...editForm, name: true, description: true })
                  }
                />
              </div>
              <p className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start">
                {product?.type?.name}
              </p>
              <p className="text-sm text-gray-600">{product?.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
