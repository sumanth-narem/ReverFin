/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Manifesto() {
  return (
    <>
      <div className='flex items-center justify-center flex-col w-full bg-primary-100'>
        <div className='w-full max-w-[100rem] px-12 pt-16'>
          <div className='w-full py-20 flex items-center justify-center border-x border-primary-50 text-primary-600'>
            <div className='max-w-[46rem] text-justify'>
              <div className='flex items-start justify-start flex-col gap-4'>
                <div className='flex items-center justify-center flex-col w-full'>
                  <p className='font-alliance text-5xl text-primary-800 text-center max-w-[30rem] mb-5'>Finance wasn’t always this broken</p>
                </div>
                <p className='text-lg'>There was a time when one ledger, one spreadsheet, and a sharp memory could run a company. Founders knew their numbers. Accountants made sense of stories, not just statements.</p>
                <p className='text-lg font-semibold'>Then came scale - and with it, chaos.</p>
                <p className='text-lg'>The systems multiplied. Approvals became guesswork and "trust" and not "confidence" took precedence. Checks and balances became time-consuming and audits added further to the pain. Reports lagged behind reality. Insight turned into hindsight.</p>
                <p className='text-lg font-semibold'>Finance stopped being strategic. It became… scattered.</p>
                <div className='text-lg'>
                  <p>We built <span className='font-semibold text-primary-600'>Rever</span> because we lived that pain.</p>
                  <p>We’ve spent over a decade working with 500+ teams that deserve better - sharper tools, cleaner workflows, and more time to think forward.</p>
                </div>
                <p className='text-lg font-semibold'>So we’re changing the narrative.</p>
              </div>
              <div className='flex items-start justify-start flex-col gap-4 mt-10 text-lg'>
                <div className='flex items-center justify-center flex-col w-full'>
                  <p className='font-alliance text-5xl text-primary-800 text-center max-w-[30rem] mb-5'>What we believe </p>
                </div>
                <div>
                  <p className='font-semibold'>Finance teams should lead, not chase.</p>
                  <p>No more firefighting. Real-time insight should guide every move. Focus should shift from clerical overload to timely, decisive action.</p>
                </div>
                <div>
                  <p className='font-semibold'>Controls must be ironclad safeguards and not procedural burdens </p>
                  <p>Control procedures should not collapse into check-the-box routines that delay or derail timely reporting and add to the procedural overload as well as a fire drill and a crushing burden when things go wrong.</p>
                </div>
                <div>
                  <p className='font-semibold'>Approvals shouldn’t be blind.</p>
                  <p>They should be informed, automated, and audit-ready — always.</p>
                </div>
                <div>
                  <p className='font-semibold'>Data should talk. Systems should listen.</p>
                  <p>All your documents, ERPs, and approvals must connect into a single, intelligent flow and change management efforts and ERP specific skillset needs must not disrupt operations.</p>
                </div>
                <div>
                  <p className='font-semibold'>Automation should liberate.</p>
                  <p>We reduce the manual, not the meaningful.</p>
                </div>
                <div>
                  <p className='font-semibold'>Finance deserves better tools.</p>
                  <p>Not stitched-together spreadsheets. A true operating system.</p>
                </div>
              </div>
              <div className='flex items-start justify-start flex-col gap-4 mt-10 text-lg'>
                <div className='flex items-center justify-center flex-col w-full'>
                  <p className='font-alliance text-5xl text-primary-800 text-center max-w-[30rem] mb-5'>This is our promise</p>
                </div>
                <p>To CFOs, accountants, controllers, and every builder trying to bring clarity to chaos -</p>
                <p>Rever is your copilot. Built on five pillars to restore trust in numbers, time in your day, and control in your hands:</p>
                <ul className='list-disc list-inside'>
                  <li><span className='font-semibold'>Automation</span> that frees your time</li>
                  <li><span className='font-semibold'>Insight</span> that sharpens your decisions</li>
                  <li><span className='font-semibold'>Control</span> that earns you trust</li>
                  <li><span className='font-semibold'>Intelligence</span> that adds meaning to data</li>
                  <li><span className='font-semibold'>Unification</span> that brings it all together</li>
                </ul>
              </div>
              <div className=' mt-10'>
                <p className='text-2xl font-semibold'>Welcome to the new era of intelligent finance.</p>
                <p className='text-xl'>Join us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Manifesto