import React from 'react'

const ProjectSpecific = () => {
  return (
    <div className='w-full h-screen p-10 space-y-3'>
        <div className='w-full h-20 bg-gray-900 rounded-xl text-center'>Project Name, Deadline, Status</div>
        <div className='w-full grid grid-cols-4 gap-4'>
            <div className='col-span-2 bg-gray-900 rounded-xl h-96'>Project Info</div>
            <div className='col-span-1 bg-gray-900 rounded-xl h-96'>Task List</div>
            <div className='col-span-1 bg-gray-900 rounded-xl h-96'>Team Members</div>
        </div>
        <div className='w-full grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-gray-900 rounded-xl h-96'>Workspace</div>
            <div className='col-span-1 bg-gray-900 rounded-xl h-96'>ChatGPT</div>
        </div>
        
    </div>
  )
}

export default ProjectSpecific