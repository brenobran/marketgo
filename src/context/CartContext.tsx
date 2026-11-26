import React,{createContext,useContext,useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {CartLine,Product} from '@/types';
import {addItem,setQuantity,subtotal} from '@/utils/cart';
type Value={cart:CartLine[];add:(p:Product)=>void;quantity:(id:string,n:number)=>void;clear:()=>void;total:number};
const C=createContext<Value>({cart:[],add:()=>{},quantity:()=>{},clear:()=>{},total:0});
export function CartProvider({children}:{children:React.ReactNode}){
 const [cart,setCart]=useState<CartLine[]>([]);
 useEffect(()=>{AsyncStorage.getItem('marketgo-cart').then(v=>{if(v)setCart(JSON.parse(v));});},[]);
 useEffect(()=>{AsyncStorage.setItem('marketgo-cart',JSON.stringify(cart));},[cart]);
 return <C.Provider value={{cart,add:p=>setCart(old=>addItem(old,p)),quantity:(id,n)=>setCart(old=>setQuantity(old,id,n)),clear:()=>setCart([]),total:subtotal(cart)}}>{children}</C.Provider>;
}
export const useCart=()=>useContext(C);
