import {filterStores,groupProducts} from '@/utils/catalog';
const stores:any=[{name:'Mercado Bom Preço',category:'Mercado',description:'Rápido'},{name:'Padaria Central',category:'Padaria',description:'Pães'}];
describe('catalog',()=>{it('filters by search',()=>expect(filterStores(stores,'mercado','Todas')).toHaveLength(1));
it('filters by category',()=>expect(filterStores(stores,'','Padaria')).toHaveLength(1));
it('groups products by section',()=>expect(groupProducts([{section:'Frutas'},{section:'Frutas'},{section:'Bebidas'}] as any)).toHaveLength(2));});
