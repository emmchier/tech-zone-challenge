import { createContext } from "react";
import { ProductType, ToastType, UserType } from "../interfaces";

export const UserContext = createContext<UserType | null>(null);

export const ProductContext = createContext<ProductType | null>(null);

export const ToastContext = createContext<ToastType | null>(null);
