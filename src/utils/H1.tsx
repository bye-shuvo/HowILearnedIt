import React from 'react'

const H1 = ({heading}: {heading: string}) => {
  return (
      <h1 className="mb-10 text-xl flex items-center gap-3 w-full">
        {heading} <p className="w-full h-px bg-text/20"></p>
      </h1>
  )
}

export default H1
