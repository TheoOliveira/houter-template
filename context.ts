import {createContext} from "react";

export const MobileHeaderContext = createContext({
    open: false,
    setOpen: (value) => value
})