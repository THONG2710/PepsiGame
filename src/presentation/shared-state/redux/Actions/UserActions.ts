import { createAction } from "@reduxjs/toolkit";

const isLogged = createAction<boolean, 'user/isLogged'>('user/isLogged');

export { isLogged } 