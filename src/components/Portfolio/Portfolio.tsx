import {NavLink} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="Portfolio mt-5">
      <h4>Портфолио:</h4>
        <ul className="list-group">
          <li className="list-group-item nav-item">
            <NavLink to="/portfolio/fast-food" className="nav-link fs-4">Fast-food</NavLink>
          </li>
          <li className="list-group-item nav-item">
            <NavLink to="/portfolio/chat" className="nav-link fs-4">Chat</NavLink>
          </li>
          <li className="list-group-item nav-item">
            <NavLink to="/portfolio/user" className="nav-link fs-4">User</NavLink>
          </li>
        </ul>
    </div>

  );
};

export default Portfolio;