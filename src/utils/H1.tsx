import React from 'react'

const H1 = ({heading}: {heading?: string}) => {
  return (
      <h1 className="mb-5 laptop-lg:mb-10 text-md laptop-lg:text-xl flex items-center gap-3 w-full text-text">
        <p className="shrink-0">{heading}</p> <p className="w-full h-px bg-text/20"></p>
      </h1>
  )
}

export default H1
