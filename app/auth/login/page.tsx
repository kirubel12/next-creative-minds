"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {useAuthState} from 'react-firebase-hooks/auth'
import {useRouter} from "next/navigation"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { async } from '@firebase/util';
import { auth } from '@/utils/firebase';
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const loginUser = async () => {
    try {
      const result  = await signInWithPopup(auth, googleProvider)
      router.push('/dashboard')
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }

  };
  useEffect(() => {
    if(user){
      router.push('/')
    }
  },[user])
  return (
    <Card className='max-w-xl w-[400] p-4 text-center justify-center m-auto'>
      <CardTitle>Join Now</CardTitle>
      <Button className='w-full text-sm mt-4 dark:bg-primary bg-slate-600' onClick={loginUser}>Sign In With Google</Button>
    </Card>
  )
}

export default Login