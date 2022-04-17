import { CircularProgress } from "@mui/material";
import React from "react";
import { useFetch } from "../hooks/useFetch";

export const User = () => {
  const { data, loading } = useFetch({ api: "/api/user" });
  if (loading) {
    return <CircularProgress />;
  }
  return <div>{data.length}</div>;
};
