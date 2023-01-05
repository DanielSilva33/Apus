import BannerPrimary from '../components/BannerPrimary';
import HeadeComponent from '../components/Head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <main>
        <HeadeComponent />
        <Header />
        <BannerPrimary />

        <div className='mt-100'>
          <h1 className='font-bold underline text-orange-400'>
            Risi Consultoria
          </h1>
        </div>
      </main>
    </>
  );
}
