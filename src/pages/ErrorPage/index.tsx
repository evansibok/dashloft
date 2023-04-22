import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }
};

export default ErrorPage;
