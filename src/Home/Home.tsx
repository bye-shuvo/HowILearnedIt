import Navbar from './Navbar.tsx';

const Home = () => {
  return (
    <div id="home" className="min-h-dvh bg-offset-white md:px-[15vw]" >
      <header>
        <Navbar />
      </header>
      <main className="h-screen flex justify-center items-center border-red-500 border" >
        <h1 className="font-great-vibes text-4xl md:text-7xl xl:text-8xl text-center leading-snug text-wrap px-5">Code is how I think. <br /> Words are how I make you feel it.</h1>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Home
