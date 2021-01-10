import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom';

const MenuBar = () => {

  const [active, setActive] = useState(false)
  const [token, setToken] = useState(false)


  useEffect(() => {
    const userToken = localStorage.getItem('userToken')
    if (userToken == 1) setToken(true)
  }, [])

  const logoutSubmit = () => {
    localStorage.clear()
    setToken(false)
  }
  return (
    <>

      <nav class="navbar  navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">

            {
              token ? <>  <li class="nav-item">
                <NavLink exact activeClassName="active_page" to="/">Home</NavLink>
              </li>
                <li class="nav-item">
                  <NavLink exact activeClassName="active_page" to="/admin/allNews">All News</NavLink>
                </li> <li class="nav-item">
                  <NavLink exact activeClassName="active_page" to="/admin/create">Create</NavLink>
                </li>

              </> : <>  <li class="nav-item">
                <NavLink exact activeClassName="active_page" to="/">Home</NavLink>
              </li>
                  <li class="nav-item">
                    <NavLink exact activeClassName="active_page" to="/world">World </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink exact activeClassName="active_page" to="/election">Election </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink exact activeClassName="active_page" to="/healthcare">Healthcare</NavLink>
                  </li>

                </>
            }
          </ul>
          {
            token ? <Link to="/"><button onClick={logoutSubmit} className="btn ml-5 btn-brand">Logout</button></Link> :

              <Link to="/login">
                <button
                  className="btn ml-5 btn-brand">Sign in</button></Link>
          }
        </div>

      </nav>

    </>
  );
};

export default MenuBar;