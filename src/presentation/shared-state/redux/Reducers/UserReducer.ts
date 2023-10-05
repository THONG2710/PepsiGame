import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { isLogged } from "../Actions/UserActions";

export type user = {
    name: string;
    phoneNumber: string;
    score: number;
    turn: number;
}

export type userState = {
    user: user,
    isLogged: boolean;
}

export const INITIAL_USER_STATE: userState = {
    user: {name: "", phoneNumber: "", score: 0, turn: 0},
    isLogged: false
}

export const UserReducer = createReducer(
    INITIAL_USER_STATE,
    (builder) => {
        builder
            .addCase(isLogged, (state, action: PayloadAction<boolean>) => {
                state.isLogged = action.payload
            })
    }
)