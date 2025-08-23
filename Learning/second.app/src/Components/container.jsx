import React, { useState } from "react";
import Mousemove from "./mouse";

export default function Container() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Mousemove />}
      {/* loading false aanenkil kaanikkilla only when true it works */}
      <button onClick={() => setLoading(!loading)}>Toggle Load</button>
    </>
  );
}
