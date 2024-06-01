import React from 'react'

type Props = {
children: React.ReactNode
}


const layout= ({children}:Props)=> {
  return (
    <div>
       
       <div>
    {children}
      </div>
    </div>
  )
}



export default layout


