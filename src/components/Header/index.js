import { Link } from 'react-router-dom';
import { HeaderTag } from './styles';

export function Header({toLink, children}) {
    return(
        <HeaderTag>
            <h1> Healthy Food </h1>
            <nav>
            <ul>
                <li>HEALTHY RECIPES</li>
                <li>BLOG</li>
                <li>JOIN</li>
                <li>
                <Link to={toLink}>
                <button>{children}</button>
                </Link>
                </li>
            </ul>
            </nav>            
        </HeaderTag>   
    )
};