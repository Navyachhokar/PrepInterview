import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-width-w-lg">
          <h2>Start Your Personalized Interview Preparation Today!</h2>
          <p className="text-lg">Get curated interview questions specifc to job role — whether frontend developer, data analyst, or any other role.</p>
          <p className="text-lg">Practice with AI and get instant feedback to improve your performance.</p>
          <Button>
            <Link href="/interview">Get started</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
        
      </section>
      <section className="flex fex-col gap-6 mt-8">
        <h2>Your Past Interviews</h2>
        <div className="interviews-section">
           {dummyInterviews.map((interview) => (
            <InterviewCard { ... interview} key={interview.id} />
          ))}
          {/* <p>You haven't taken any interviews yet.</p> */}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
            {dummyInterviews.map((interview) => (
            <InterviewCard { ... interview} key={interview.id} />
          ))}
          {/* <p>There are no interviews available.</p> */}
        </div>
      </section>
    </>
  )
}

export default Page