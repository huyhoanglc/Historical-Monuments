const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "" : "dropdown-menu dropdown-submenu"}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a className="dropdown-item" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;