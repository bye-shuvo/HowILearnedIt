import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section id="sidebar" className="tablet-lg:p-5 flex flex-col items-center h-fit">
      <Link to={"/admin/dashboard"} className="py-2 hover:cursor-pointer hover:bg-offset-white-hover w-full text-center">Dashboard</Link>
      <Link to={"/admin/atricle/new"} className="py-2 hover:cursor-pointer hover:bg-offset-white-hover w-full text-center">Create New Article</Link>
      <Link to={"/admin/article/all"} className="py-2 hover:cursor-pointer hover:bg-offset-white-hover w-full text-center">All Articles</Link>
      <Link to={"/admin/Setting"} className="py-2 hover:cursor-pointer hover:bg-offset-white-hover w-full text-center">Settings</Link>
    </section>
  )
}

export default Sidebar ;