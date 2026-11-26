# Arquitetura

Fluxo de dependência: tela → hook → serviço → Supabase.

- `app/`: rotas e telas Expo Router.
- `src/components/`: componentes reutilizáveis.
- `src/context/`: sessão e carrinho persistente.
- `src/hooks/`: consultas e mutações TanStack Query.
- `src/services/`: acesso ao Supabase.
- `src/utils/`: regras puras de carrinho, catálogo e pedidos.
- `supabase/`: schema, seed e testes de banco.

A criação de pedidos ocorre exclusivamente por RPC. O cliente envia identificadores e
quantidades; a função SQL busca os preços reais, calcula o total e grava o snapshot.
