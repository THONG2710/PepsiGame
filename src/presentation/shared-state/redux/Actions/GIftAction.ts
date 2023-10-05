import { createAction } from "@reduxjs/toolkit";
import { gift } from "../Reducers/GiftReducer";

const addGift = createAction<gift, 'gift/addGift'>('gift/addGift');

export {addGift}