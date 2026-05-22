import Navbar from "./Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ArticleGrid from "./ArticleGrid.tsx";
import Explore from "./Explore.tsx";
import Quote from "./Quote.tsx";
import Footer from "./Footer.tsx";
import Featured from "./Featured.tsx";

const Home = () => {
  return (
    <div id="home" className="min-h-dvh bg-offset-white tablet-lg:px-[20vw] selection:bg-offset-white-hover font-base text-text">
      <Navbar />
      <LandingPage />
      <Featured />
      <ArticleGrid />
      <Quote />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
