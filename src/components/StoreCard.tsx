import React from 'react';import {Pressable,Text,View,StyleSheet} from 'react-native';
import type {Store} from '@/types';import {colors} from '@/theme';import {formatMoney} from '@/utils/money';
export function StoreCard({store,onPress}:{store:Store;onPress:()=>void}){
 return <Pressable onPress={onPress} disabled={!store.is_open} style={[s.card,!store.is_open&&{opacity:.5}]}>
 <Text style={s.emoji}>{store.emoji}</Text><View style={{flex:1}}><Text style={s.name}>{store.name}</Text><Text style={s.meta}>{store.category} · ⭐ {store.rating} · {store.eta_min}-{store.eta_max} min</Text><Text style={s.meta}>Entrega {formatMoney(store.delivery_fee)} · Mínimo {formatMoney(store.min_order)}</Text>{!store.is_open&&<Text style={s.closed}>Fechada agora</Text>}</View></Pressable>;
}
const s=StyleSheet.create({card:{backgroundColor:'#fff',borderRadius:16,padding:14,marginBottom:10,flexDirection:'row',gap:12,alignItems:'center'},emoji:{fontSize:34},name:{fontSize:17,fontWeight:'800',color:colors.text},meta:{color:colors.muted,marginTop:3,fontSize:12},closed:{color:colors.danger,fontWeight:'700',marginTop:4}});
