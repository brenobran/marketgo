import type { Product, Store } from '@/types';
export function filterStores(stores:Store[],query:string,category:string):Store[] {
 const q=query.trim().toLocaleLowerCase('pt-BR');
 return stores.filter(s=>(!q || `${s.name} ${s.description}`.toLocaleLowerCase('pt-BR').includes(q))
 && (category==='Todas' || s.category===category));
}
export function groupProducts(products:Product[]) {
 const groups=new Map<string,Product[]>();
 products.forEach(p=>groups.set(p.section,[...(groups.get(p.section)??[]),p]));
 return [...groups].map(([title,data])=>({title,data}));
}
export function formatEta(min:number,max:number):string { return `${min}–${max} min`; }
