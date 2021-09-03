import { IconSearch } from '../../assets/icons';
import './sass/Search.scss';

export const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar Tours" />
      <button>
        <IconSearch/>
      </button>
    </div>
  );
};
