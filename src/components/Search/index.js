import { SearchBar, SearchTag } from "./styles";
import vectorSearchImg from "../../assets/images/vectorSearch.svg";

export function Search() {
        return(
            <SearchTag>

            <SearchBar>
                <h2>Ready for <br/>
                 Trying a new <br/>
                 recipe?
                </h2>
                <div>
                    <input type="text" placeholder="Search healthy recipes"/>
                    <button>
                        <img src={vectorSearchImg} alt="Search"/>
                    </button> 
                </div>
            </SearchBar>
            </SearchTag>
            )
};


