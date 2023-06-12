import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (typeof error === 'object' && error instanceof Error) {
    console.error(error);
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unknown error has occurred.</p>
    </div>
  );
}
