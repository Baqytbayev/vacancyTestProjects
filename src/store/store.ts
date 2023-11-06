import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { sliceRandom } from "./randomSlice";

const makeStore = () => {
    return configureStore({
        reducer: {
            random: sliceRandom.reducer
        }
    })
}
export const store = makeStore()
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;