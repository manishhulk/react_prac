import React from 'react'

const Post = ({blogData}) => {
  const {title, content} = blogData;
  return (
    <>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{__html: content}}></p>
    </>
  )
}

export async function getServerSideProps(context) {
  var { slug } = context.query
  var data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  var blogData = await data.json();

  return {
    props: {blogData}
  }
}

export default Post