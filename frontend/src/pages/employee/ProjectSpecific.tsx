import React from 'react'
import TextGen from '@/components/TextGen'


const ProjectSpecific = () => {
  return (
    <div><div className='w-full h-screen p-10 space-y-3'>
    <div className='w-full py-6 bg-gray-900 rounded-xl text-center space-y-4'>
      <h1 className='text-xl font-semibold'>Project A</h1>
      <div className='flex justify-center text-sm text-zinc-300 space-x-3'>
        <h2>60% Complete</h2>
        <h2>2 months left</h2>
      </div>
    </div>
    <div className='w-full grid grid-cols-4 gap-4'>
        <div className='col-span-2 bg-gray-900 rounded-xl h-96'>Project Info</div>
        <div className='col-span-1 bg-gray-900 rounded-xl h-96'>
          
        </div>
        <div className='col-span-1 bg-gray-900 rounded-xl h-96'>Team Members</div>
    </div>
    <div className='w-full grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-gray-900 rounded-xl h-96'>Workspace</div>
        <TextGen/>
    </div>
    
</div></div>
  )
}

export default ProjectSpecific