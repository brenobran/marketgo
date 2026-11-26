insert into public.stores(name,category,emoji,description,rating,delivery_fee,eta_min,eta_max,min_order,is_open) values
('Mercado Bom Preço','Mercado','🛒','Supermercado de bairro com entrega rápida.',4.7,5.9,30,45,20,true),
('Padaria Pão Quente','Padaria','🥖','Pães e cafés saindo do forno o dia todo.',4.8,3.5,15,25,10,true),
('Farmácia Vida','Farmácia','💊','Medicamentos e higiene, sem sair de casa.',4.6,6,25,40,15,true),
('Hortifrúti da Terra','Hortifrúti','🥬','Frutas, verduras e legumes fresquinhos.',4.5,4.9,30,50,25,true),
('Pizzaria Forno a Lenha','Restaurante','🍕','Pizzas artesanais de massa fina.',4.9,7.9,40,60,30,true),
('Sushi Sakura','Restaurante','🍣','Culinária japonesa. Volta amanhã.',4.4,9.9,45,65,40,false);
insert into public.products(store_id,section,name,description,price,emoji)
select s.id,v.section,v.name,v.description,v.price,v.emoji from public.stores s join (values
('Mercado Bom Preço','Hortifrúti','Banana prata 1 kg','',6.9,'🍌'),('Mercado Bom Preço','Hortifrúti','Maçã gala 1 kg','',9.9,'🍎'),
('Mercado Bom Preço','Mercearia','Arroz branco 5 kg','Tipo 1',29.9,'🍚'),('Mercado Bom Preço','Mercearia','Feijão carioca 1 kg','',8.5,'🫘'),
('Mercado Bom Preço','Laticínios','Leite integral 1 L','',5.25,'🥛'),('Mercado Bom Preço','Limpeza','Detergente 500 ml','',2.9,'🧴'),
('Padaria Pão Quente','Padaria','Pão francês  unidade','',0.9,'🥖'),('Padaria Pão Quente','Cafés','Café coado','',5.5,'☕'),
('Farmácia Vida','Higiene','Sabonete','',3.9,'🧼'),('Farmácia Vida','Higiene','Creme dental','',6.5,'🪥'),
('Hortifrúti da Terra','Frutas','Laranja 1 kg','',5.9,'🍊'),('Hortifrúti da Terra','Verduras','Alface unidade','',3.5,'🥬'),
('Pizzaria Forno a Lenha','Pizzas','Pizza mussarela','Grande',42,'🍕'),('Pizzaria Forno a Lenha','Bebidas','Refrigerante 2 L','',11.9,'🥤')
) as v(store_name,section,name,description,price,emoji) on s.name=v.store_name;
