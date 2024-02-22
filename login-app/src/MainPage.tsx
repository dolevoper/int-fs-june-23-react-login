import { useLoaderData } from "react-router";

export function MainPage() {
  const data = useLoaderData();

  return (
    <>
      <h1>This is the main content of the site</h1>
      <p>This should only be accessible to logged in users.</p>
      <article>{JSON.stringify(data, null, "\t")}</article>
    </>
  );
}
