import {addItem,setQuantity,subtotal} from '@/utils/cart';
const a:any={id:'a',store_id:'s1',name:'A',price:10,emoji:'🍎'};
const b:any={id:'b',store_id:'s1',name:'B',price:5,emoji:'🍞'};
const c:any={id:'c',store_id:'s2',name:'C',price:7,emoji:'🍕'};
describe('cart',()=>{it('adds and increments items',()=>{expect(addItem(addItem([],a),a)[0].quantity).toBe(2);});
it('does not mix stores',()=>{expect(addItem([ {product:a,quantity:1} ],c)).toHaveLength(1);});
it('removes zero quantity',()=>{expect(setQuantity([{product:a,quantity:1}],a.id,0)).toHaveLength(0);});
it('calculates subtotal',()=>{expect(subtotal([{product:a,quantity:2},{product:b,quantity:1}])).toBe(25);});});
