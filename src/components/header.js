import data from '../data.json';
import { NavLink } from 'react-router-dom';

const Header = ({ setSelectedPage }) => {
    return (
        <div>
            {
                data.pages.map(i => {
                    return (
                        <button className="butonum"><NavLink
                        key={i.page}
                        activeClassName={'active'}
                        style={{ marginRight: '20px' }}
                        to={`/question/${i.page}`}>{i.page}
                    </NavLink></button>
                        
                    );
                })
            }
        </div>
    );
}

export default Header;