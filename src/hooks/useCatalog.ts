import { useQuery } from '@tanstack/react-query';
import { getProducts,getProduct,getStore,getStores } from '@/services/stores';
export function useStores(){return useQuery({queryKey:['stores'],queryFn:getStores});}
export function useStore(id:string){return useQuery({queryKey:['store',id],queryFn:()=>getStore(id),enabled:!!id});}
export function useProducts(id:string){return useQuery({queryKey:['products',id],queryFn:()=>getProducts(id),enabled:!!id});}
export function useProduct(id:string){return useQuery({queryKey:['product',id],queryFn:()=>getProduct(id),enabled:!!id});}
