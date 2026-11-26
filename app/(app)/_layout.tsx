import {Stack,Redirect} from 'expo-router';import {useAuth} from '@/context/AuthContext';import {Loading} from '@/components/UI';
export default function AppLayout(){const {session,loading}=useAuth();if(loading)return <Loading/>;if(!session)return <Redirect href="/(auth)/login"/>;return <Stack screenOptions={{headerShown:false}}/>;}
