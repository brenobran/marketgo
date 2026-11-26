export function formatMoney(value:number):string {
 return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value);
}
export function roundMoney(value:number):number { return Math.round((value + Number.EPSILON)*100)/100; }
