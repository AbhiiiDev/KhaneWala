import React from 'react'
import Header from '@/components/Header'

type Props = {
children: React.ReactNode
}


const layout= ({children}:Props)=> {
  return (
    <div className=''>
       <Header/>
       <div className='container mx-auto py-16'>
    {children}
      </div>
    </div>
  )
}



export default layout


