"use client"
import React, {useEffect} from 'react'
import {auth, db} from '../../utils/firebase'

import {useRouter} from "next/navigation"
import { useAuthState } from 'react-firebase-hooks/auth'
const DashbaordPage = () => {
  const [user,loading] = useAuthState(auth)
  const router = useRouter();
  const getData = async () => {

    if (loading) return;
    if (!user) return router.push('/auth/login')
  };
  useEffect(() => {
    getData()
  },[user,loading])
  return (
  
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
    </div>
  )
}

export default DashbaordPage