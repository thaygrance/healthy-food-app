import { BlogTag } from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgCard1 from "../../assets/images/blog_image_1.svg";
import imgCard2 from "../../assets/images/bloco_image_2.svg";
import imgCard3 from "../../assets/images/bloco_image_3.svg";
import imgCard4 from "../../assets/images/bloco_image_4.svg";
import avatar1 from "../../assets/images/avatar_1.svg";
import avatar2 from "../../assets/images/avatar_2.svg";
import avatar3 from "../../assets/images/avatar_3.svg";
import avatar4 from "../../assets/images/avatar_4.svg";

export function Blog () {

    const responsive = {
        DesktopOrMobile: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 0 },
          items: 3.3
        }
      };

    return(
        <BlogTag>
        <h3> Read Our Blog</h3>
        <p> Far far away, behind the world mountains, far from the countries <br/> Vakalia and 
        Consonantia, there live the blind texts.</p>
        <div className="Container">
        <Carousel responsive={responsive}>
        <div className="Card">
            <figure>
                <img src={imgCard1} alt="Broccoli Salad with Bacon"/>
            </figure>
            <h4>Quick-start guide <br/> to nuts and seeds </h4>
            <div className="avatar">
                <figure>
                    <img src={avatar1} alt="autor"/> 
                </figure>
                <h5>Kevin Ibrahim</h5>
            </div>
        </div>
        <div className="Card">
            <figure>
                <img src={imgCard2} alt="Classic Beef Burgers"/>
            </figure>
            <h4>Nutrition: Tips for <br/> Improving Your Health</h4>
            <div className="avatar">
                <figure>
                    <img src={avatar2} alt="autor"/> 
                </figure>
                 <h5>Mike Jackson</h5>
            </div>
        </div>
        <div className="Card">
            <figure>
                <img src={imgCard3} alt="Classic Potato Salad"/>
            </figure>
            <div>
                <h4> The top 10 benefits <br/> of eating healthy </h4>
                <div className="avatar">
                <figure>
                    <img src={avatar3} alt="autor"/> 
                </figure>
                <h5>Bryan McGregor</h5>
            </div>
            </div>
        </div>
        <div className="Card">
            <figure>
                <img src={imgCard4} alt="Cherry Cobbier on the Grill"/>
            </figure>
            <div>
                <h4> Is intermitent fasting  <br/> healthy? </h4>
                <div className="avatar">
                <figure>
                    <img src={avatar4} alt="autor"/> 
                </figure>
                 <h5>Joshua Leonel</h5>
            </div>
            </div>
        </div>
        </Carousel>
        </div>
        </BlogTag>
       
    )
};