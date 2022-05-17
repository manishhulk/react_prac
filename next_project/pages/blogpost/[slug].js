import React from 'react'
import {useRouter} from 'next/router'

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>This is the page handle : {slug}</div>
  )
}

export default Post