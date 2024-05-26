import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../../redux/createAppSlice"

type Event = { id: string; startTime: string; endTime: string }

type initialState = {
  value: Event[]
  status: "idle" | "loading" | "failed"
}

export const eventSlice = createAppSlice({
  name: "events",

  initialState: {
    value: [],
    status: "idle",
  } as initialState,

  reducers: create => ({
    deleteEvent: create.reducer((state, action: PayloadAction<string>) => {
      state.value.filter(event => event.id !== action.payload)
    }),
    addEvent: create.reducer((state, action: PayloadAction<Event>) => {
      state.value.push(action.payload)
    }),
  }),
  selectors: {
    selectValue: state => state.value,
    selectStatus: state => state.status,
  },
})

export const { addEvent, deleteEvent } = eventSlice.actions
export const { selectValue, selectStatus } = eventSlice.selectors
