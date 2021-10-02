import Image from 'next/image';

const Home = () => (
  <>
    <h1>
      <Image
        src="/img/logo.webp"
        alt="마켓컬리 로고"
        width={103}
        height={79}
      />
    </h1>
  </>
);

export default Home;
