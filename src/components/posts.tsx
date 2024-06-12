import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import { glob } from 'glob';

export default async function Posts() {
  const pages = await glob('pages/**/*.tsx', { cwd: __dirname });
  console.log(pages);
  return (
    <div className='block  md:grid grid-cols-2 lg:grid-cols-3 gap-5 '>
      <Card sx={{ maxWidth: 345 }} className='mb-6'>
        <Link href={'/github'}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='./public/img/software.svg'
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      <Card sx={{ maxWidth: 345 }} className='mb-6'>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='./public/img/software.svg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className='mb-6'>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='./public/img/software.svg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} className='mb-6'>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image='./public/img/software.svg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
