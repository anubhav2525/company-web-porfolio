import React from "react";

const ProtectedLaoyut = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default ProtectedLaoyut;
