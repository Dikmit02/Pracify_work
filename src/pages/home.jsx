import Hero from '../components/hero/index';
import Foodmenu from '../components/foodmenu/index';
import Company from '../components/company/index';
import Blog from '../components/blog/index';
import NewsLetter from '../components/newsletter/index'
function Home() {
    return (
        <main>
            <Hero />
            <Foodmenu />
            <Company />
            
            <NewsLetter />
            <Blog />
        </main>
    );
}

export default Home;
