import type { CartLine, Product } from '@/types';
export function addItem(lines:CartLine[], product:Product):CartLine[] {
 if(lines.length && lines[0].product.store_id !== product.store_id) return lines;
 const found=lines.find(x=>x.product.id===product.id);
 if(found) return lines.map(x=>x.product.id===product.id?{...x,quantity:Math.min(20,x.quantity+1)}:x);
 return [...lines,{product,quantity:1}];
}
export function setQuantity(lines:CartLine[],id:string,quantity:number):CartLine[] {
 if(quantity<=0) return lines.filter(x=>x.product.id!==id);
 return lines.map(x=>x.product.id===id?{...x,quantity:Math.min(20,quantity)}:x);
}
export function subtotal(lines:CartLine[]):number {
 return Math.round(lines.reduce((s,x)=>s+x.product.price*x.quantity,0)*100)/100;
}
export function quantityOf(lines:CartLine[],id:string):number {
 return lines.find(x=>x.product.id===id)?.quantity ?? 0;
}
