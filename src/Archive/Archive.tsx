import React from 'react'
import Header from './Header';
import Navbar from '../Home/Navbar';
import Search from './Search';
import Articles from './Articles';
import Footer from '../Home/Footer';

const Archive = () => {
  return (
    <div id="archive">
      <Navbar />
      <Header />
      <Search />
      <Articles />
      <Footer />
    </div>
  )
}

export default Archive
