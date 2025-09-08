import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const Navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get("action");
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <h2>Home Page</h2>
      <h3 onClick={() => Navigate("/contact")}>
        Click me to go to Contact Page
      </h3>
      <h6>search param click buttont hen url differences right?</h6>
      <button onClick={() => setSearchParams({ action: "Login" })}>Add</button>
      <button onClick={() => setSearchParams()}>Remove</button>
      {/* now how to retrieve  */}
      <h3>Action from query is "{text}"</h3>
    </>
  );
}
