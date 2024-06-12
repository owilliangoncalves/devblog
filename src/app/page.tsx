import Image from 'next/image';
import github from '../../public/img/github.svg';
import portfolio from '../../public/img/portfolio.svg';
import software from '../../public/img/software.svg';
import Link from 'next/link';
import { Tooltip } from '@mui/material';

export default function Home() {
  return (
    <div className='containerCenter '>
      <div className='containerFlexColCenter'>
        <div className='flex align-middle items-center'>
          <p className='textPresentation'>Olá! Seja bem vindo(a) à</p>
          <div className=' gap-5 hidden md:flex ml-5'>
            <Tooltip title='GitHub' arrow placement='top'>
              <Link
                href={'https://github.com/owilliangoncalves'}
                target='_blank'
              >
                <Image src={github} width={45} height={45} alt='Logo Github' />
              </Link>
            </Tooltip>
            <Tooltip title='Portfólio' arrow placement='top'>
              <Link href={'/portfolio'}>
                <Image
                  src={portfolio}
                  width={45}
                  height={45}
                  alt='Ícone da tela de um computador simbolizando o portfólio de projetos'
                />
              </Link>
            </Tooltip>
            <Tooltip
              title='Veja conteúdo sobre Engenharia de Software'
              arrow
              placement='top'
            >
              <Link href={'/software'}>
                <Image
                  src={software}
                  width={45}
                  height={45}
                  alt='Ícone de uma tag HTML para simbolizar engenharia de software'
                />
              </Link>
            </Tooltip>
          </div>
        </div>
        <h1 className='textPresentationImportantUppercase '>Devs Experts</h1>
        <div className='flex gap-3 md:hidden mt-2 '>
          <Link href={'https://github.com/owilliangoncalves'} target='_blank'>
            <button className='button textPresentation'>GitHub</button>
          </Link>
          <Link href={'/portfolio'} target='_blank'>
            <button className='button textPresentation'>Portfólio</button>
          </Link>
          <Link href={'/software'} target='_blank'>
            <button className='button textPresentation'>Aprenda</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
