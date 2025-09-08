import React from "react";
import { useParams } from "react-router";

export default function Electronics() {
  const { item } = useParams();
  return <div>Electronics {item}</div>;
}
