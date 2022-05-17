import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  console.table(router);

  const { sno } = router.query;
  return (
    <h1>This is { sno }</h1>
  )
}

export default Post