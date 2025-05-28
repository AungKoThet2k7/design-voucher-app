import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  return (
    <div className={`flex items-center gap-1 ${align === "right" ? "justify-end": "justify-start"}`}>
      <span className="flex flex-col">
        <button
        onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
        })}
         className="hover:text-sky-500">
          <LuChevronUp />
        </button>
        <button
        onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
        })}
         className="hover:text-sky-500">
          <LuChevronDown />
        </button>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Sortable;
