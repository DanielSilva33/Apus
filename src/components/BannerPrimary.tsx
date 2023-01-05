import Image from 'next/image';
import bannerPrimary from '../../public/bannerPrimary.jpg';

export default function BannerPrimary() {
  return (
    <>
      <div className='w-full h-96 overflow-hidden rounded-sm'>
        <Image src={bannerPrimary} alt='Imagem ilustrativa de um banner' />
      </div>
    </>
  );
}
