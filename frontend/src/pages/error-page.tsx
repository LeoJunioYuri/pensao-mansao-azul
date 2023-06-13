import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (typeof error === 'object' && error instanceof Error) {
    console.error(error);
    return (
      <div id="error-page">
        <h1>Opa!</h1>
        <p>Desculpe, ocorreu um erro inesperado.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>Opa!</h1>
      <p>Desculpe, ocorreu um erro desconhecido.</p>
    </div>
  );
}
