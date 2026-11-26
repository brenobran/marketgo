# MarketGo

Aplicativo mobile de compras com entrega, desenvolvido com React Native, Expo, TypeScript e Supabase.

## Funcionalidades
- Cadastro, login e sessão persistente.
- Catálogo de lojas com busca e categorias.
- Cardápio por loja e detalhe de produto.
- Carrinho local com regra de uma loja por vez.
- Checkout com endereço, pagamento e validação.
- Histórico, acompanhamento, cancelamento e pedir novamente.
- Regras financeiras e criação do pedido executadas no banco.

## Tecnologias
React Native, Expo Router, TypeScript, Supabase (Postgres/RLS/RPC), TanStack Query,
AsyncStorage, React Hook Form, Zod e Jest.

## Configuração
1. Instale Node.js 22 ou superior.
2. `npm install`
3. Crie um projeto no Supabase.
4. Execute `supabase/schema.sql` e depois `supabase/seed.sql` no SQL Editor.
5. Copie `.env.example` para `.env` e preencha URL e chave pública do Supabase.
6. No Supabase, para facilitar o projeto acadêmico, desative a confirmação de e-mail em
   Authentication > Providers > Email.
7. `npx expo start`

## Testes
- `npm run typecheck`
- `npm test`
- `npm run format`

## Segurança
O app não grava pedidos diretamente. A função `create_order` valida loja, produtos,
quantidades, pedido mínimo e forma de pagamento, recalculando o subtotal com os preços
armazenados no banco. RLS limita a leitura dos pedidos ao respectivo usuário.
Nunca coloque `service_role` no aplicativo.

## Observação
O pagamento é simulado: nenhum valor é cobrado e nenhum pedido é entregue de verdade.
As credenciais do Supabase precisam ser configuradas pelo responsável pelo projeto.
