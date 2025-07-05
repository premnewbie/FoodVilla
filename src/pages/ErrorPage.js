import { useRouteError } from "react-router"

function ErrorPage() {
  const err = useRouteError();

  return (
    <div>
        <h1>OOPS!!!</h1>
        <h2>Something went wrong...</h2>
        <p>{err.status + " : " + err.statusText}</p>
    </div>
  )
}

export default ErrorPage;