import BannerPrimary from '../components/BannerPrimary';
import HeadeComponent from '../components/Head';
import Header from '../components/Header';

export default function Sobre() {
  return (
    <>
      <main>
        <HeadeComponent />
        <Header />
        <BannerPrimary />

        <div className='mt-100'>
          <h1 className='font-bold underline text-orange-400'>
            Uma empresa focada no micro e pequeno empreendedor
          </h1>
        </div>
      </main>
    </>
  );
}
