import Link from 'next/link'
import React from 'react'
import Button from './Button'

const CallToAction = () => {
  return (
    <div className="container p-8 border border-primary/20 rounded-xl bg-white">
      <h2 className="font-secondary text-4xl sm:text-5xl w-full sm:w-2/3 font-bold tracking-tight
      text-primary mb-8">
        2025 Intake in Progress. Apply Now!
      </h2>

      <Link href={'/admissions#admissionForm'}>
        <Button>Apply now</Button>
      </Link>
    </div>
  )
}

export default CallToAction