import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { addGift } from "../Actions/GIftAction";

export type gift = {
    id: number;
    name: string;
    score: number;
    quantity: number;
    image: any;
    isRecived: false;
}

export type giftState = {
    gift: gift[]
}

export const INITIAL_GIFT: giftState = {
    gift: []
}

export const GiftReducer = createReducer(
    INITIAL_GIFT,
    (build) => {
        build
            .addCase(addGift, (state, action: PayloadAction<gift>) => {
                state.gift.push(action.payload);
            })
    }
)