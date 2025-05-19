import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="ml-4 my-5">
        <header className="text-4xl font-bold">Oops</header>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
