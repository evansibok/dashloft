import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }
};

export default ErrorPage;
