import Features from "../components/Features";
import HeroBanner from "../components/HeroBanner";
import MidBanner from "../components/MidBanner";
import MultipleBanner from "../components/MultipleBanner";
import NewCollection from "../components/NewCollection";
import TopSellers from "../components/TopSellers";


const Home = () => {
    return (
        <div>
            <HeroBanner />
            <MultipleBanner />
            <NewCollection />
            <MidBanner />
            <TopSellers />
            <Features />
        </div>
    );
};

export default Home;