import { combineReducers } from "redux";
import email from "./slices/email";

const rootReducer = combineReducers({
    email,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
