import React from "react";

type TContextData = {
  data: {
    permission: "player" | "admin";
  };
};

const value: TContextData = {
  data: {
    permission: "player",
  },
};

export const AppContext = React.createContext(value);
