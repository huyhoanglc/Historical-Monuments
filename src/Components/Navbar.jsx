import { menuItemsData } from './menuItemsData';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
            
          <ul class="dropdown-menu menus" aria-labelledby="navbarDropdown">
          {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index}/>;            
        })}
          </ul>
       
    
  );
};

export default Navbar;