import { RecipesTag, Card, CardContainer } from "./styles";
import imgCard1 from "../../assets/images/comida_1.svg";
import imgCard2 from "../../assets/images/comida_2.svg";
import imgCard3 from "../../assets/images/comida_3.svg";
import imgCard4 from "../../assets/images/comida_4.svg";

export function Recipes () {
    return(
        <RecipesTag>
        <h3> Our Best Recipes</h3>
        <p> Far far away, behind the world mountains, far from the countries <br/> Vakalia and 
        Consonantia, there live the blind texts.</p>
        <CardContainer>
        <Card>
            <figure>
                <img src={imgCard1} alt="Broccoli Salad with Bacon"/>
            </figure>
            <div>
                <h4>Broccoli Salad <br/> with Bacon</h4>
                <button> See Recipe </button> 
            </div>
        </Card>
        <Card>
            <figure>
                <img src={imgCard2} alt="Classic Beef Burgers"/>
            </figure>
            <div>
                <h4>Classic Beef <br/> Burgers</h4>
                <button> See Recipe </button>
            </div>
        </Card>
        <Card>
            <figure>
                <img src={imgCard3} alt="Classic Potato Salad"/>
            </figure>
            <div>
                <h4>Classic Potato <br/> Salad</h4>
                <button> See Recipe </button>
            </div>
        </Card>
        <Card>
            <figure>
                <img src={imgCard4} alt="Cherry Cobbler on the Grill"/>
            </figure>
            <div>
                <h4>Cherry Cobbler <br/> on the Grill</h4>
                <button> See Recipe </button>
            </div>
        </Card>
        </CardContainer>
       </RecipesTag>
    )
};