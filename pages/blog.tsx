import Link from 'next/link';
import Layout from '../components/Layout';
import styles from './Blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}
const Blog = (props: BlogProps) => {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      <div className={styles.blogs}>
        {dataBlog.map((blog) => (
          <div className={styles.blog} key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <h4 className={styles['blog-title']}>{blog.title}</h4>
            </Link>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;

// getServerSideProps cocok untuk mengambil data yang dinamis
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const dataBlog = await response.json();

  return {
    props: {
      dataBlog,
    },
  };
}
