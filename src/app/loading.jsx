import { Loader2Icon } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader2Icon className="w-40 animate-spin" />
    </div>
  );
};

export default loading;
