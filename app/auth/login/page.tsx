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
import {useRouter} from "next/navigation"


const Login = () => {
  const router = useRouter();

  return (
    <Card className='max-w-xl w-[400] p-4 text-center justify-center m-auto'>
      <CardTitle>Join Now</CardTitle>
      <Button className='w-full text-sm mt-4 dark:bg-primary bg-slate-600'>Sign In With Google</Button>
    </Card>
  )
}

export default Login