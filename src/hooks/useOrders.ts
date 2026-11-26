import { useMutation,useQuery,useQueryClient } from '@tanstack/react-query';
import { cancelOrder,getOrder,getOrders,createOrder } from '@/services/orders';
import type { CheckoutData } from '@/schemas/checkout';
import type { CartLine } from '@/types';
export function useOrders(){return useQuery({queryKey:['orders'],queryFn:getOrders,refetchInterval:15000});}
export function useOrder(id:string){return useQuery({queryKey:['order',id],queryFn:()=>getOrder(id),enabled:!!id,refetchInterval:8000});}
export function useCreateOrder(){const qc=useQueryClient();return useMutation({mutationFn:(v:{storeId:string;items:CartLine[];data:CheckoutData})=>createOrder(v.storeId,v.items,v.data),onSuccess:()=>qc.invalidateQueries({queryKey:['orders']})});}
export function useCancelOrder(){const qc=useQueryClient();return useMutation({mutationFn:cancelOrder,onSuccess:()=>{qc.invalidateQueries({queryKey:['orders']});qc.invalidateQueries({queryKey:['order']});}});}
