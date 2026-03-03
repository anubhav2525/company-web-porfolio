import { ThemeProvider } from "./theme-provider";
import React from "react";

const ThemeWrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
