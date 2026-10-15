
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FeaturedNews from "../components/FeaturedNews";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="container">
        <FeaturedNews />
        <LatestNews />
      </main>

      <Footer />
    </>
  );
}

export default Home;
