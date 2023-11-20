import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3 sticky-top">
      <div className="container-fluid text-light">
        <div className="navbar-brand">
        <h1 className="text-light"><img src="https://i.ibb.co/56nrFJ6/todo.png" alt="Logo" className="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' ,backgroundSize:"cover",borderRadius: '50%!important' ,border: '2px solid white',padding: '5px'}}/>
          Tasks To-Do</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;