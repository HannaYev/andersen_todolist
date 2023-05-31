import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootReducer } from "../../store/store";
import { MemoryRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  route: string;
}

export function RenderWithProviders(props: Props) {
  const store = configureStore({ reducer: RootReducer });
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[props.route]}>
        {props.children}
      </MemoryRouter>
    </Provider>
  );
}
