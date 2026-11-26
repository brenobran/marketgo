import {checkoutSchema} from '@/schemas/checkout';
describe('checkout',()=>{it('accepts complete address',()=>expect(checkoutSchema.safeParse({street:'Rua A',number:'10',neighborhood:'Centro',payment:'pix'}).success).toBe(true));
it('rejects missing street',()=>expect(checkoutSchema.safeParse({street:'',number:'10',neighborhood:'Centro',payment:'pix'}).success).toBe(false));});
