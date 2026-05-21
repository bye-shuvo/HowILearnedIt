import Navbar from "./Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ArticleGrid from "./ArticleGrid.tsx";
import Explore from "./Explore.tsx";
import Quote from "./Quote.tsx";

const Home = () => {
  return (
    <div id="home" className="min-h-dvh bg-offset-white laptop-lg:px-[20vw] selection:bg-offset-white-hover font-base text-text">
      <Navbar />
      <LandingPage />
      <ArticleGrid />
      <Quote />
      <Explore />
      <footer></footer>
    </div>
  );
};

export default Home;
