import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selecAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(selecAuthState, (auth) => !!auth.user);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
