export type Category = 'Mercado' | 'Padaria' | 'Farmácia' | 'Restaurante' | 'Hortifrúti';
export type PaymentMethod = 'pix' | 'card' | 'cash';
export type OrderStatus = 'received' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
export interface Store {
 id:string; name:string; category:Category; emoji:string; description:string; rating:number;
 delivery_fee:number; eta_min:number; eta_max:number; min_order:number; is_open:boolean;
}
export interface Product {
 id:string; store_id:string; section:string; name:string; description:string;
 price:number; emoji:string; is_active:boolean;
}
export interface CartLine { product:Product; quantity:number; }
export interface Order {
 id:string; user_id:string; store_id:string; store_name:string; status:OrderStatus;
 payment_method:PaymentMethod; change_for:number|null; address_street:string;
 address_number:string; address_neighborhood:string; address_complement:string|null;
 subtotal:number; delivery_fee:number; total:number; created_at:string;
}
export interface OrderItem { id:string; order_id:string; name:string; emoji:string; unit_price:number; quantity:number; total_price:number; }
