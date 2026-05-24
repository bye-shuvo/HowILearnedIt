import React from 'react'
import Topics from './Topics';
import H1 from '../utils/H1';

const Explore = () => {
  return (
    <section id="explore" className="min-w-full w-full h-fit pb-5 laptop-lg:pb-10">
    <H1 heading="Explore" />
      <Topics />
    </section>
  )
}

export default Explore
