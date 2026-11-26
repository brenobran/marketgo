export function friendlyError(error:unknown):string {
 if(error && typeof error==='object' && 'message' in error) return String(error.message);
 return 'Não foi possível concluir. Tente novamente.';
}
