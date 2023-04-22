import { Link } from "react-router-dom";
import { useProduct } from "../../hooks";
import { ChangeEvent, useState } from "react";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../state";
import { baseURL } from "../../utils/constants";
import { modifyProduct } from "../../state/products/thunks";

interface Type {
  id: string;
  [key: string]: any;
}

const EditProductPage = () => {
  const dispatch = useAppDispatch();
  const { product, loading } = useProduct();
  const [editForm, setEditForm] = useState({
    name: false,
    description: false,
    categories: false,
    businessModels: false,
  });
  const [productForm, setProductForm] = useState({
    name: product?.name || "",
    description: product?.description || "",
    categories: product?.categories || "",
    businessModels: product?.businessModels || "",
  });
  const [typeForm, setTypeForm] = useState<Type>({
    id: "",
    name: "",
  });

  const onHandleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductForm({
      ...productForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const onTypeChange = (evt: ChangeEvent<HTMLInputElement>, type: Type[]) => {
    const idList: Type["id"][] = [];
    for (const key in type) {
      const typeId = type[key].id;
      idList.push(typeId);
    }
    const typeId = (Number(idList[idList.length - 1]) + 1).toString();
    setTypeForm({
      id: typeId,
      [evt.target.name]: evt.target.value,
    });
  };

  const removeCategory = (cat: Type) => {
    console.log("remove->cat", cat);
    setProductForm({
      ...productForm,
      categories: [
        ...productForm.categories.filter(
          (category: Type) => category.id !== cat.id
        ),
      ],
    });
  };

  const addCategory = (cat: Type) => {
    console.log("add->cat", cat);
    setProductForm({
      ...productForm,
      categories: [...productForm.categories, cat],
    });
    setTypeForm({ id: "", name: "" });
  };

  const removeModel = (model: Type) => {
    console.log("remove->model", model);
    setProductForm({
      ...productForm,
      businessModels: [
        ...productForm.businessModels.filter(
          (mod: Type) => mod.id !== model.id
        ),
      ],
    });
  };

  const addModel = (model: Type) => {
    console.log("add->model", model);
    setProductForm({
      ...productForm,
      businessModels: [...productForm.businessModels, model],
    });
    setTypeForm({ id: "", name: "" });
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

        {/* Product details */}
        <div className="flex flex-col gap-4 bg-white w-full pt-4 rounded-md">
          <p>Details</p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1 text-sm">
              Technology
              {!editForm.categories && (
                <PencilSquareIcon
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() => setEditForm({ ...editForm, categories: true })}
                />
              )}
            </p>

            {/* Edit categories */}
            {editForm.categories ? (
              <>
                <p className="flex flex-wrap gap-2">
                  {productForm?.categories.map((category: Type) => (
                    <span
                      key={category.name}
                      className="flex items-center bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg"
                    >
                      {category?.name}
                      <XMarkIcon
                        className="w-3 h-3 ml-1"
                        onClick={() => removeCategory(category)}
                      />
                    </span>
                  ))}
                </p>
                <input
                  type="text"
                  name="name"
                  className="text-sm pl-2 border-2 border-indigo-400 rounded-md h-10"
                  placeholder={typeForm.name}
                  value={typeForm.name}
                  onChange={(evt) => onTypeChange(evt, productForm?.categories)}
                  onKeyDownCapture={(evt) => {
                    if (evt.code === "Enter") {
                      addCategory(typeForm);
                    }
                  }}
                />
                <div className="flex gap-2 self-end items-center">
                  {loading && (
                    <span className="text-xs text-indigo-400">Saving...</span>
                  )}
                  <button
                    onClick={() => {
                      setEditForm({ ...editForm, categories: false });
                      setProductForm({
                        ...productForm,
                        categories: product?.categories,
                      });
                    }}
                    className="text-indigo-500 text-xs py-1 px-2 rounded-md flex self-end"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      await modifyProduct(dispatch, baseURL, 6781, productForm);
                      setEditForm({ ...editForm, categories: false });
                    }}
                    className="bg-gray-200 text-indigo-500 text-xs py-1 px-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <p className="flex flex-wrap gap-2">
                {product?.categories.map((category: Record<string, string>) => {
                  return (
                    <span
                      key={category.name}
                      className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg"
                    >
                      {category.name}
                    </span>
                  );
                })}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-1 text-sm">
              Business Models{" "}
              {!editForm.businessModels && (
                <PencilSquareIcon
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() =>
                    setEditForm({ ...editForm, businessModels: true })
                  }
                />
              )}
            </p>

            {/* Edit Business Models */}
            {editForm.businessModels ? (
              <>
                <p className="flex flex-wrap gap-2">
                  {productForm?.businessModels.map((model: Type) => (
                    <span
                      key={model.name}
                      className="flex items-center bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg"
                    >
                      {model?.name}
                      <XMarkIcon
                        className="w-3 h-3 ml-1"
                        onClick={() => removeModel(model)}
                      />
                    </span>
                  ))}
                </p>
                <input
                  type="text"
                  name="name"
                  className="text-sm pl-2 border-2 border-indigo-400 rounded-md h-10"
                  placeholder={typeForm.name}
                  value={typeForm.name}
                  onChange={(evt) =>
                    onTypeChange(evt, productForm?.businessModels)
                  }
                  onKeyDownCapture={(evt) => {
                    if (evt.code === "Enter") {
                      addModel(typeForm);
                    }
                  }}
                />
                <div className="flex gap-2 self-end items-center">
                  {loading && (
                    <span className="text-xs text-indigo-400">Saving...</span>
                  )}
                  <button
                    onClick={() => {
                      setEditForm({ ...editForm, businessModels: false });
                      setProductForm({
                        ...productForm,
                        businessModels: product?.businessModels,
                      });
                    }}
                    className="text-indigo-500 text-xs py-1 px-2 rounded-md flex self-end"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      await modifyProduct(dispatch, baseURL, 6781, productForm);
                      setEditForm({ ...editForm, businessModels: false });
                    }}
                    className="bg-gray-200 text-indigo-500 text-xs py-1 px-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <p className="flex flex-wrap gap-2">
                {product?.businessModels.map(
                  (model: Record<string, string>) => (
                    <span
                      key={model.name}
                      className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start"
                    >
                      {model?.name}
                    </span>
                  )
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
