import React, { useContext } from "react";
import { AppContext } from "../Context/ContextApiImplentation";

export const Footer = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <>
      <div className=" flex flex-row justify-center gap-4">
        {page > 1 && (
          <button
            className="border-4 bg-slate-400 w-20 h-10 rounded-lg hover:bg-slate-500"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            className="border-4 bg-slate-400 w-20 h-10 rounded-lg hover:bg-slate-500"
            onClick={() => handlePageChange(page + 1)}
          >
            {" "}
            Next
          </button>
        )}
      </div>
      <p className="text-center text-cyan-950 mt-4">
        Page {page} of {totalPages}
      </p>
    </>
  );
};
