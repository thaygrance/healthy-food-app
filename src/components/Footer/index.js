import { FooterTag } from "./styles";

export function Footer(){
    return(
        <FooterTag>
            <div className="Copyright">
                 <p>&copy; Copyrights 2019 Stack. All Rights Reserved.</p>
            </div>
            <div className="Terms">
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </FooterTag>       
    )
};