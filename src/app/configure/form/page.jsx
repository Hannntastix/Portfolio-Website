import FeedbackForm from '@/app/components/Form'
import SecondNavbar from '@/app/components/SecondNavbar'
import StarryBackground from '@/app/components/StarryBackground'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-black relative px-1">
      <StarryBackground />
      <div className='relative z-10'>
        <SecondNavbar />
        <FeedbackForm />
      </div>
    </main>
  )
}

export default page