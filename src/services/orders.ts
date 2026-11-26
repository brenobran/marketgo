import { supabase } from '@/lib/supabase';
import type { CheckoutData } from '@/schemas/checkout';
import type { CartLine } from '@/types';
export async function createOrder(storeId:string,items:CartLine[],data:CheckoutData) {
 const {data:orderId,error}=await supabase.rpc('create_order',{
  p_store_id:storeId,p_items:items.map(x=>({product_id:x.product.id,quantity:x.quantity})),
  p_payment:data.payment,p_change_for:data.payment==='cash'&&data.changeFor?Number(data.changeFor):null,
  p_street:data.street,p_number:data.number,p_neighborhood:data.neighborhood,p_complement:data.complement||null
 });
 if(error) throw error; return orderId as string;
}
export async function getOrders() {
 const {data,error}=await supabase.from('orders').select('*').order('created_at',{ascending:false});
 if(error) throw error; return data??[];
}
export async function getOrder(id:string) {
 const {data,error}=await supabase.from('orders').select('*,order_items(*)').eq('id',id).single();
 if(error) throw error; return data;
}
export async function cancelOrder(id:string) {
 const {error}=await supabase.rpc('cancel_order',{p_order_id:id}); if(error) throw error;
}
export async function advanceOrder(id:string) {
 const {error}=await supabase.rpc('advance_order',{p_order_id:id}); if(error) throw error;
}
