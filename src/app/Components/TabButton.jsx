import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-black border-b border-purple-500"
    : "text-gray";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
