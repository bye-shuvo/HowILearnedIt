import React from 'react'

const Newsletter = () => {
  return (
    <section className="w-full px-5 laptop-lg:px-0">
    <div className="w-full flex justify-center items-center flex-col laptop-lg:gap-5 gap-3 border border-text p-5">
        <h1 className="text-lg">Newsletter</h1>
        <p className="font-Quintessential text-2xl laptop-lg:text-5xl text-text">Words worth the wait</p>
        <p className="text-sm laptop-lg:text-xl">Subscribe to our newsletter for weekly bites of exiciting contents</p>
        <div className="px-2 py-2 laptop-lg:w-2/3 w-3/4 selection:bg-offset-white-hover placeholder:text-text placeholder:text-lg text-sm laptop-lg:text-lg border border-text flex justify-between items-center">
        <input type="email" placeholder="youremail@provider.com" className="border-none outline-none w-2/3 h-fit"/>
            <button className="text-text font-great-vibes text-lg cursor-pointer">Subscribe Now</button>
        </div>
        <p>No spam. Unsubscribe any time.</p>
    </div>
    </section>
  )
}

export default Newsletter
