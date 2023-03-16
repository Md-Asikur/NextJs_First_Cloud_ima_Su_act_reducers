import React from 'react'
import { useRouter } from 'next/router'

const sno = props => {
    const router = useRouter()
    const {sno}=router.query
  return (
    <div>sno is:{sno}</div>
  )
}



export default sno