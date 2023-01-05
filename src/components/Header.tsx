import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='bg-slate-900 rounded-sm opacity-90 h-10 w-auto'>
        <div className='text-white text-center pt-2 text-base space-x-5'>
          <Link href='/'>Inicio</Link>
          <Link href='/sobre'>Sobre</Link>
          <Link href='/planos'>Planos</Link>
          <Link href='/blog'>Blog</Link>
        </div>
      </header>
    </>
  );
}
