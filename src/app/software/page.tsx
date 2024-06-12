import { Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function EngenhariaSoftware() {
  return (
    <>
      <div>
        <h1 className='text-black titulo'>Engenharia de Software</h1>
      </div>

      <div>
        <p className='my-6 text-base text-justify md:text-2xl lg:text-3xl'>
          Aqui você irá encontrar alguns temas relacionado a Engenharia de
          Software. Nós, sempre iremos tentar abordar determinado tema da forma
          mais descontraída e lucida possível.
        </p>
      </div>
      <Link href={'/software'}></Link>
    </>
  );
}
