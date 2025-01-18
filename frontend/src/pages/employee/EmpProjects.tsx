import React from 'react'
import { Link } from 'react-router-dom'

const EmpProjects = () => {
    return (
        <div className='flex flex-wrap gap-4 items-center justify-between p-10'>
            <Link to='/projectspecific'>
                <div className='w-96 h-64 bg-gray-900 rounded-xl'>Project 1</div>
            </Link>
            <div className='w-96 h-64 bg-gray-900 rounded-xl'>Project 2</div>
            <div className='w-96 h-64 bg-gray-900 rounded-xl'>Project 3</div>
            <div className='w-96 h-64 bg-gray-900 rounded-xl'>Project 4</div>
        </div>
    )
}

export default EmpProjects