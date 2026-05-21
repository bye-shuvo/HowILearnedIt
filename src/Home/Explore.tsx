import React from 'react'
import Topics from './Topics';

const Explore = () => {
  return (
    <section id="explore" className="min-w-full w-full h-fit">
    <h1 className="mb-10 text-xl flex items-center gap-3 w-full">Explore <p className="w-full h-px bg-text/20"></p></h1>
      <Topics />
    </section>
  )
}

export default Explore
