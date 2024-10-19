import React from 'react'
import Team from '@/components/Team/Team'

function page() {
  return (
    <div className='pt-28 lg:pt-0'>
    <div className='container'>
        <Team loadmore={false}/>
        
    </div>
    </div>
  )
}

export default page