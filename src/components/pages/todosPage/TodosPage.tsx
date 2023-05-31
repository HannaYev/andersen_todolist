import React, { useRef } from "react";
import { Tabs } from "../../tabs/Tabs";
import { Todos } from "../../todos/Todos";

export const TodosPage = () => {
  return (
    <>
      <Tabs />
      <Todos />
    </>
  );
};
