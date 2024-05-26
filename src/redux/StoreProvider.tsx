"use client"

import type { ReactNode } from "react"
import { Provider } from "react-redux"

import { persistStore } from "redux-persist"
import { store } from "./store"
import { PersistGate } from "redux-persist/integration/react"

interface Props {
  readonly children: ReactNode
}

let persistor = persistStore(store)

export const StoreProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
