import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className="page-title">Welcome Marzuki</h1>
      {[...new Array(10)].map((_, i) => (i % 4 === 0 ? (
          <Image src={`https://picsum.photos/30${i}`} width={200} height={200} alt="Image 1" />
      ) : (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptatum, eligendi illo quaerat nemo reiciendis doloribus
            molestias iure sed eveniet at delectus fugiat error ab nisi
            architecto saepe optio! Odio.
          </p>
      )))}
    </Layout>
  );
};

export default Home;
