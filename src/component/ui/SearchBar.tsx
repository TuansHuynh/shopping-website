import '../style/searchbar.scss'
import img from '../../assets/image/icon/search.svg'

function SearchBar() {



    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
                <span>Search</span>
                <img src={img} alt="search" />
            </button>
        </div>
    );
}

export default SearchBar;