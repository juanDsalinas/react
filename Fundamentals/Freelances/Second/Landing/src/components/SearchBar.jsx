import '../styles/seachBar.css';
import {useState} from 'react'
import handleData from '../services/callData';
import  debounce  from 'lodash';
import { Link  } from 'react-router-dom';

// rfce
function SearchBar({place}) {
    const [filterData, setFilterData] = useState([]);
    // const navigate = useNavigate();
    // var cont=0;

    const handleFilter = (e)=>{
        // console.log(handleData);
        // console.log(handleData);
        const word = e.target.value;
        const filter = handleData().filter((v)=>{
            return v.title.toLowerCase().includes(word.toLowerCase());
        })
        if (word === '') {
            setFilterData([]);
            console.log(filter);
        }else {
            console.log(filter);
            setFilterData(filter);   
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log("PRESIONASTE ENTER JSJS");
            // history.push(`/results?query=${e}`);
            // navigate('/results');
            <Link to={"/home"}></Link>
        }
    }

    return (
        <div className="search">
            <div className="searchInput">
                <input type="search" name="seachBar" id="searchBar" className='pan' placeholder={place}
                onChange={handleFilter} onKeyDown={handleKeyPress}/>
                {/* <div className="searchIcon">°</div> */}
            </div>
            {
                filterData != '' && (
                    <div className="dataResults">
                    {
                        filterData.slice(0,5).map((item,key)=>{
                            return (
                                <a className='dataItem' href={item.link} target='_blank' key={key}>
                                    <p>{item.title}</p>
                                </a>
                            )
                        })
                    }
                    </div>
                )
            }

        </div>
    )
}

export default SearchBar