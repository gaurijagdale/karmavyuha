import React from 'react'
import TextGen from '@/components/TextGen'

const EmployeeDashboard = () => {
    return (
        <div className='w-full grid grid-cols-3 p-10 h-screen gap-4'>

            <div aria-label='left' className='flex flex-col col-span-2 gap-4'>
                <div className='h-96 bg-gray-900 rounded-xl'>Projects</div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='col-span-1 bg-gray-900 h-96'>Upcoming Projects</div>
                    <div className='col-span-1 bg-gray-900 h-96'>Todo List</div>
                </div>
            </div>

            <div aria-label='right' className='col-span-1 flex flex-col gap-4'>
                <div className='h-96 bg-gray-900 rounded-xl'>Notifications</div>
                <TextGen />
            </div>
        </div>
    )
}

export default EmployeeDashboard