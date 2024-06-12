import NavBar from '@/components/navbar';
import EngenhariaSoftware from './page';
import type { Metadata } from 'next';
import Posts from '@/components/posts';
import { Container } from '@mui/material';

export const metadata: Metadata = {
  title: 'Engenharia de Software',
  description:
    'Essa é a página inicial onde encontra diversos tópicos sobre engenharia de software',
};
export default function navbar() {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg'>
        <EngenhariaSoftware />
        <Posts />
      </Container>
    </>
  );
}
