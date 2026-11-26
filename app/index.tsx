import {Redirect} from 'expo-router';import {useAuth} from '@/context/AuthContext';import {Loading} from '@/components/UI';
export default function Index(){const {session,loading}=useAuth();if(loading)return <Loading/>;return <Redirect href={session?'/(app)/(tabs)':'/(auth)/login'}/>;}
