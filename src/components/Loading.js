import React from "react";
import loading from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      loading...
      <img src={loading} alt="loading" />
    </div>
  );
}
