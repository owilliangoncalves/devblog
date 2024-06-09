import Image from 'next/image';
import github from '../../public/img/github.svg';
import portfolio from '../../public/img/portfolio.svg';
import software from '../../public/img/software.svg';

export default function Home() {
  return (
    <div className='containerCenter '>
      <div className='containerFlexColCenter'>
        <div className='flex align-middle'>
          <p className='textPresentation text-white'>
            Olá! Eu sou Willian Gonçalves
          </p>
          <div className=' gap-5 hidden md:flex'>
            <Image src={github} width={45} height={45} alt='Logo Github' />
            <Image src={portfolio} width={45} height={45} alt='Logo Github' />
            <Image src={software} width={45} height={45} alt='Logo Github' />
          </div>
        </div>

        <h1 className='textPresentationImportantUppercase text-white'>
          Engenheiro de Software
        </h1>
      </div>
    </div>
  );
}
