import { Link } from "react-router-dom";
import { useProduct } from "../../hooks";

const ProductPage = () => {
  const { product } = useProduct();

  return (
    <div className="flex flex-col gap-5 w-full px-3">
      <Link
        to="edit"
        className="bg-indigo-500 text-white text-sm py-1 px-2 rounded-md flex self-end"
      >
        Edit
      </Link>

      <div className="bg-white flex flex-col w-full border border-gray-200 rounded-md gap-3 px-2 py-2 mt-3">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="w-full h-36 bg-center bg-no-repeat bg-contain border-2 border-indigo-700 rounded-md"
            style={{
              backgroundImage: `url('${product?.picture}')`,
            }}
          />
          <h3 className="font-bold text-base">{product?.name}</h3>
          <p className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start">
            {product?.type?.name}
          </p>
          <p className="text-sm text-gray-600">{product?.description}</p>
        </div>

        {/* Product details */}
        <div className="flex flex-col gap-4 bg-white w-full pt-4 rounded-md">
          <p>Details</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Technology</p>
            <p className="flex gap-2">
              {product?.categories.map((category: Record<string, string>) => (
                <span
                  key={category.name}
                  className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg"
                >
                  {category?.name}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">Business Model</p>
            <p className="flex flex-wrap gap-2">
              {product?.businessModels.map((model: Record<string, string>) => (
                <span
                  key={model.name}
                  className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start"
                >
                  {model?.name}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">TRL</p>
            <p className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start">
              {product?.trl?.name}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">Costs</p>
            <p className="bg-gray-200 text-xs text-gray-500 py-1 px-2 rounded-lg flex self-start">
              {product?.investmentEffort}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
