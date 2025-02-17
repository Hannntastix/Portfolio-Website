"use client"

import FeedbackForm from '@/app/components/Form'
import LoadingModal from '@/app/components/LoadingModal'
import SecondNavbar from '@/app/components/SecondNavbar'
import StarryBackground from '@/app/components/StarryBackground'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingModal />;
  }

  return (
    <main className="min-h-screen relative px-1">
      <StarryBackground />
      <div className='relative z-10'>
        <SecondNavbar />
        <FeedbackForm />
      </div>
    </main>
  )
}

export default page