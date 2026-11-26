import {useState} from 'react';import {Alert,Text} from 'react-native';import {Link, useRouter} from 'expo-router';
import {Screen,Title,Field,Button} from '@/components/UI';import {supabase} from '@/lib/supabase';import {colors} from '@/theme';
export default function Login(){const [email,setEmail]=useState('');const [password,setPassword]=useState('');const [busy,setBusy]=useState(false);const router=useRouter();
 async function submit(){setBusy(true);const {error}=await supabase.auth.signInWithPassword({email:email.trim(),password});setBusy(false);if(error)Alert.alert('Não foi possível entrar',error.message);else router.replace('/(app)/(tabs)');}
 return <Screen><Title>MarketGo 🛒</Title><Text style={{color:colors.muted,marginBottom:18}}>Entre para fazer suas compras.</Text><Field placeholder="E-mail" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail}/><Field placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword}/><Button title={busy?'Entrando...':'Entrar'} onPress={submit} disabled={busy}/><Link href="/(auth)/register" style={{color:colors.primary,marginTop:18}}>Criar uma conta</Link></Screen>;
}
