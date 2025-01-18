import React from 'react'

const EmpLeaderboard = () => {
    return (
        <div className='w-full h-screen p-10 space-y-3'>
            <div className='w-full h-20 bg-gray-900 rounded-xl text-center'>Employee Leaderboard</div>
            <div className='w-full grid grid-cols-5 gap-4'>
                <div className='col-span-2 bg-gray-900 rounded-xl h-96'>Top Performer</div>
                <div className='col-span-3 bg-gray-900 rounded-xl h-96'>Rank List</div>
            </div>
            <div className='w-full h-56 bg-gray-900'>
                Achievement List
            </div>
            <div className='w-full h-72 bg-gray-900'>
            Performance Metrics Breakdown
            </div>

        </div>
    )
}

export default EmpLeaderboard