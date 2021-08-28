import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const Custom404 = () => {
  const router = useRouter();
  const [second, setsecond] = useState(3);

  useEffect(() => {
    if (second === 0) {
      router.push('/');
    }
    setInterval(() => {
      setsecond(second - 1);
    }, 1000);
  }, [second]);
  return (
    <div className="container-404">
      <h1 className="title-not-found">
        Oops...
{' '}
<br />
        Halaman yang Anda akses tidak ditemukan.
        <br />
        <br />
        Kembali ke halaman sebelumnya dalam
{' '}
{second}
{' '}
detik.
      </h1>
    </div>
  );
};

export default Custom404;
