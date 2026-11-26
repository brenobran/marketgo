import React from 'react';
import {ActivityIndicator,Pressable,StyleSheet,Text,TextInput,View} from 'react-native';
import {colors,radius,spacing} from '@/theme';
export function Button({title,onPress,disabled=false}:{title:string;onPress:()=>void;disabled?:boolean}){
 return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={[s.button,disabled&&{opacity:.5}]}><Text style={s.buttonText}>{title}</Text></Pressable>;
}
export function Screen({children}:{children:React.ReactNode}){return <View style={s.screen}>{children}</View>;}
export function Field(props:React.ComponentProps<typeof TextInput>){return <TextInput placeholderTextColor={colors.muted} style={s.field} {...props}/>;}
export function Loading(){return <View style={s.center}><ActivityIndicator size="large" color={colors.primary}/></View>;}
export function Empty({text}:{text:string}){return <View style={s.center}><Text style={s.muted}>{text}</Text></View>;}
export function Title({children}:{children:string}){return <Text style={s.title}>{children}</Text>;}
const s=StyleSheet.create({
 screen:{flex:1,backgroundColor:colors.background,padding:spacing.md},button:{backgroundColor:colors.primary,padding:15,borderRadius:radius.md,alignItems:'center',marginVertical:6},
 buttonText:{color:'#fff',fontWeight:'800',fontSize:16},field:{backgroundColor:'#fff',borderWidth:1,borderColor:colors.border,borderRadius:radius.md,padding:14,marginVertical:6,color:colors.text},
 center:{flex:1,alignItems:'center',justifyContent:'center',padding:24},muted:{color:colors.muted},title:{fontSize:25,fontWeight:'800',color:colors.text,marginBottom:14}
});
