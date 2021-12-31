import { Header } from '../../components/Header/index';
import { Search } from '../../components/Search/index';
import { Recipes } from '../../components/Recipes/index';
import { BestServices } from '../../components/BestServices/index'
import { Blog } from '../../components/Blog/index';
import { Join } from '../../components/Join';
import { Footer } from '../../components/Footer';

export function Home () {
    return (
        <>
        <Header toLink={"/register"}>
            REGISTER
        </Header>
        <Search/>
        <Recipes/>
        <BestServices/>
        <Blog/>
        <Join/>
        <Footer/>
        </>
    )
};
