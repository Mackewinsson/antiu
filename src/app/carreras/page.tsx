'use client';
import { Button } from '@/components/button/button';
import React from 'react';
import { Card } from '@/components/card/card';
import { Badge } from '@/components/badges/badges';

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
        src='holder.js/100px180?text=Image cap'
        className='mb-5'
        title='Título de la Tarjeta'
        subtitle='Subtítulo de la Tarjeta'
        content={<p>Contenido de la tarjeta.</p>}
      />

      <div>
        <h1>Componente de Badge Reutilizable</h1>
        <Badge variant='primary' text='Nuevo' />
        <Badge variant='success' text='Completado' />
        <Badge variant='danger' text='Importante' />
      </div>
    </>
  );
}
