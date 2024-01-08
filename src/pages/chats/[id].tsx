'use client';

import RootLayout from '@/app/layout';
import { useRouter } from 'next/router'

export default function Chat() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)

  return (
    // <RootLayout>
      <h1>Details about chat {id}</h1>
    // </RootLayout>
  )
}