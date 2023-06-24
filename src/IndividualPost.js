import React from 'react'
import { useParams } from 'react-router-dom'

export const IndividualPost = () => {
    const {postId}=useParams();
  return (
    <div>IndividualPost</div>
  )
}
