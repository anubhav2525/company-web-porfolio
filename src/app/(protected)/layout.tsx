import ThemeWrapper from "@/lib/theme-wrapper";
import React from "react";

const ProtectedLaoyut = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeWrapper>
      <div>{children}</div>
    </ThemeWrapper>
  );
};
export default ProtectedLaoyut;
