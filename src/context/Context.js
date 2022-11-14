import { createContext } from "react";

const ctx = {
  theme: "",
  setTheme: () => {},
};

export const Context = createContext(ctx);
