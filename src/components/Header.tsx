export default function Header() {
  return (
    <>
      <header className='bg-slate-900 rounded-sm opacity-90 h-10 w-auto'>
        <div className='text-white text-center pt-2 text-base space-x-5'>
          <a href='/'>Inicio</a>
          <a href='/sobre'>Sobre</a>
          <a href='/planos'>Planos</a>
          <a href='/blog'>Blog</a>
        </div>
      </header>
    </>
  );
}
