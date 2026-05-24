import Navbar from "./Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ArticleGrid from "./ArticleGrid.tsx";
import Explore from "./Explore.tsx";
import Quote from "./Quote.tsx";
import Footer from "./Footer.tsx";
import Featured from "./Featured.tsx";
import Newsletter from "./Newsletter.tsx";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <LandingPage />
      <Featured />
      <ArticleGrid />
      <Quote />
      <Explore />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
