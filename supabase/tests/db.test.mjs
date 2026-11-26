import test from 'node:test';
import assert from 'node:assert/strict';
test('estrutura do schema contém RLS e RPC de criação segura', async()=>{
 const fs=await import('node:fs/promises');const sql=await fs.readFile(new URL('../schema.sql',import.meta.url),'utf8');
 assert.match(sql,/enable row level security/i);assert.match(sql,/create_order/i);
 assert.match(sql,/p\.price\*i\.quantity/i);assert.match(sql,/revoke all on function/i);
});
test('schema não libera escrita direta nas tabelas de pedidos',async()=>{
 const fs=await import('node:fs/promises');const sql=await fs.readFile(new URL('../schema.sql',import.meta.url),'utf8');
 assert.doesNotMatch(sql,/create policy[^;]+for insert[^;]+orders/i);
});
