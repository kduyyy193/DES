import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";
import {RootState, AppDisatch} from './store';

export const useAppDispatch = () => useDispatch<AppDisatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;