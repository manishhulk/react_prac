import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Blog = ({allBlogs}) => {
  console.table(allBlogs);
  return (
    <main className={styles.main}>
      <div className="blogs">
        {
          allBlogs.map((blog) => {
            const {title, slug, metadesc} = blog;
            return (
              <Link href={`/blogpost/${slug}`} key={slug}>
                <a>
                  <div className="blogItem">
                    <h3>{title}</h3>
                    <p>{metadesc}</p>
                  </div>
                </a>
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  var data = await fetch('http://localhost:3000/api/blogs');
  var allBlogs = await data.json();

  return {
    props: {allBlogs}
  }
}

export default Blog