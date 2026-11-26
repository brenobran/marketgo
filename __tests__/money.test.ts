import {formatMoney,roundMoney} from '@/utils/money';
describe('money',()=>{it('rounds cents',()=>expect(roundMoney(1.005)).toBe(1.01));it('formats Brazilian currency',()=>expect(formatMoney(10)).toContain('10,00'));});
