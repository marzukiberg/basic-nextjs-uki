import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';
import styles from './Users.module.css';

interface UsersProps {
  dataUsers: Array<any>;
}
const Users = (props: UsersProps) => {
  const { dataUsers } = props;
  const router = useRouter();
  const navigateRoute = (_user: { id: number; }) => {
    router.push(`/users/${_user.id}`);
  };
  return (
    <Layout pageTitle="Users Page">
      <h1 className="page-title">Users Page</h1>
      <div className={styles.users}>
        {dataUsers.map((user) => {
          return (
            <div key={user.id} onClick={() => navigateRoute(user)} className={styles.user}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Users;

// API dipanggil terlebih dahulu sebelum rendering halaman
// saat bundling production, data ini akan dirender secara statis sehingga data akan langsung dimuat tanpa memanggil API
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
