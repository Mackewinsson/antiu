'use client';
import { Button } from '@/components/button/button';
import React from 'react';
import { Card } from '@/components/card/card';
import { Badge } from '@/components/badges/badges';
import { Spinner } from '@/components/spinner/spinner';
import { ProgressBar } from '@/components/progressBar/progressBar';

export default function Home() {
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <>
      <div className='mb-5'>Carreras</div>

      <Button
        type='button'
        variant='secondary'
        className='btn-component mb-5'
        text='prueba'
        onClick={handleClick}
        size='lg'
        active
      />

      <Card
        className='mb-5'
        title='Título de la Tarjeta'
        subtitle='Subtítulo de la Tarjeta'
        content={<p>Contenido de la tarjeta.</p>}
      />

      <div className='mb-5'>
        <h1>Reusable Badge Component</h1>
        <Badge variant='primary' text='Nuevo' />
        <Badge variant='success' text='Completado' />
        <Badge variant='danger' text='Importante' />
      </div>

      <div className='mb-5'>
        <Spinner animation='border' variant='primary' role='status' />
        <Spinner animation='grow' variant='secondary' />
        <Spinner animation='border' variant='success' />
        <Spinner animation='grow' variant='danger' role='status' />
        <Spinner animation='border' variant='warning' />
        <Spinner animation='grow' variant='info' />
        <Spinner animation='border' variant='light' role='status' />
        <Spinner animation='grow' variant='dark' />
        <Spinner animation='border' size='sm' variant='primary' />
        <Spinner animation='grow' variant='secondary' />
        <Spinner animation='border' variant='success' role='status' />
        <Spinner animation='grow' variant='danger' />
        <Spinner animation='border' size='sm' variant='warning' />
        <Spinner animation='grow' variant='info' />
        <Spinner animation='border' variant='light' role='status' />
        <Spinner animation='border' variant='dark' />
        <Button variant='primary' disabled>
          <Spinner as='span' animation='grow' size='sm' role='status' />
          Loading...
        </Button>
      </div>

      <div className='w-2 mb-5'>
        <ProgressBar
          variant='info'
          min={1}
          now={90}
          max={100}
          label={`90%`}
        ></ProgressBar>
        <ProgressBar
          animated
          striped
          variant='success'
          min={1}
          now={40}
          max={100}
        />
        <ProgressBar variant='info' min={1} now={20} max={100} />
        <ProgressBar
          animated
          striped
          variant='warning'
          min={1}
          now={60}
          max={100}
        />
        <ProgressBar variant='danger' min={1} now={80} max={100} />
      </div>
    </>
  );
}
