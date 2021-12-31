import { EmailBar, JoinTag } from "./styles";

export function Join() {
        return(
            <JoinTag>

            <EmailBar>
                <h2>Join our membership <br/>
                 to get special offer
                </h2>
                <div>
                    <input type="email" placeholder="Enter your email address"/>
                    <button>
                       join
                    </button> 
                </div>
            </EmailBar>
            </JoinTag>
            )
};


