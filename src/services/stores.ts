import { supabase } from '@/lib/supabase';
export async function getStores() {
 const {data,error}=await supabase.from('stores').select('*').order('name');
 if(error) throw error; return data??[];
}
export async function getStore(id:string) {
 const {data,error}=await supabase.from('stores').select('*').eq('id',id).single();
 if(error) throw error; return data;
}
export async function getProducts(storeId:string) {
 const {data,error}=await supabase.from('products').select('*').eq('store_id',storeId).eq('is_active',true).order('section').order('name');
 if(error) throw error; return data??[];
}
export async function getProduct(id:string) {
 const {data,error}=await supabase.from('products').select('*').eq('id',id).single();
 if(error) throw error; return data;
}
