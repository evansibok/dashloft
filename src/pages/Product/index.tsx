import { Link } from "react-router-dom";
import { useAppConfig, useProduct } from "../../hooks";

const ProductPage = () => {
  const { product } = useProduct();
  const { appConfig } = useAppConfig();

  return (
    <div className="flex flex-col gap-5 w-full px-3 mb-5">
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

      {/* Video section */}
      <div className="bg-white w-full border border-gray-200 rounded-md px-2 py-4">
        <p>Video</p>
        <div className="w-full lg:h-[500px] mt-2">
          <iframe
            className="w-full h-full"
            src={product?.video.replace("watch?v=", "embed/")}
            title="product video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* User details */}
      {appConfig?.hasUserSection && (
        <div className="flex flex-col gap-4 bg-white w-full border border-gray-200 px-2 py-4 rounded-md">
          <p>Presented by:</p>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 mr-4">
                <img
                  src={product?.user?.profilePicture}
                  className="w-full rounded-full"
                  alt="user image"
                />
              </div>
              <div className="text-gray-400 text-sm font-light">
                <p className="text-gray-500 font-medium">
                  {product?.user?.firstName} {product?.user?.lastName}
                </p>
                <p>{product?.company?.name}</p>
              </div>
            </div>

            {/* Map Section */}
            <div />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
