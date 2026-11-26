import {canCancel,isActive,nextStatus,timeline} from '@/utils/orders';
describe('orders',()=>{it('moves through the expected states',()=>{expect(nextStatus('received')).toBe('preparing');expect(nextStatus('out_for_delivery')).toBe('delivered');expect(nextStatus('delivered')).toBeNull();});
it('only allows cancellation when received',()=>{expect(canCancel('received')).toBe(true);expect(canCancel('preparing')).toBe(false);});
it('marks delivered timeline complete',()=>{expect(timeline('delivered').every(x=>x.state==='done')).toBe(true);});
it('terminal states are inactive',()=>{expect(isActive('cancelled')).toBe(false);expect(isActive('delivered')).toBe(false);});});
