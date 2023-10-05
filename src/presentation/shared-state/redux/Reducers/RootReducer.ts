import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./UserReducer";
import { GiftReducer } from "./GiftReducer";

export const RootReducer = combineReducers({
    UserReducer: UserReducer,
    GiftReducer: GiftReducer,
})

export type RootState = ReturnType<typeof RootReducer>
 