import {Stack} from 'expo-router';import {QueryClientProvider} from '@tanstack/react-query';import {StatusBar} from 'expo-status-bar';
import {queryClient} from '@/lib/queryClient';import {AuthProvider} from '@/context/AuthContext';import {CartProvider} from '@/context/CartContext';
export default function Root(){return <QueryClientProvider client={queryClient}><AuthProvider><CartProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false}}/></CartProvider></AuthProvider></QueryClientProvider>;}
