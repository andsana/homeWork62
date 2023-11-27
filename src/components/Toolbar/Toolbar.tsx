import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "pink"}}>
      <div className="container-fluid">
        <span className="navbar-brand">Британские пекарни</span>
        <ul className="navbar-nav mr-auto flex-row gap-2">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          </li>
        </ul>
       </div>
    </nav>
  );
};

export default Toolbar;