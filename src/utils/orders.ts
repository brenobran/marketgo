import type { OrderStatus } from '@/types';
const steps:OrderStatus[]=['received','preparing','out_for_delivery','delivered'];
export function nextStatus(s:OrderStatus):OrderStatus|null {
 const i=steps.indexOf(s); return i<0 || i===steps.length-1 ? null : steps[i+1];
}
export function canCancel(s:OrderStatus):boolean { return s==='received'; }
export function isActive(s:OrderStatus):boolean { return s!=='delivered' && s!=='cancelled'; }
export function timeline(status:OrderStatus) {
 const current=steps.indexOf(status);
 return steps.map((step,i)=>({step,state:status==='cancelled'?'pending':i<current?'done':i===current?'current':'pending'}));
}
