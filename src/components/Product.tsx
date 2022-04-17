import { LinearProgress } from "@mui/material";
import React from "react";
import { useFetch } from "../hooks/useFetch";

export const Product = () => {
  const { data, loading } = useFetch({ api: "/api/products" });
  if (loading) {
    return <LinearProgress />;
  }

  return <div>{data.length}</div>;
};
