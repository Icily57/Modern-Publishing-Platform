import './Navigation.scss';

const Navbar = () => {
  return (
    <div className="Nav">
     <div className='Logo'>Blogr</div>
     <div className="NavLinks">
      <div className="dropdown">
       <button className="dropdown-btn" > <a href="#product">Product</a></button>
       <button className="dropdown-btn" > <a href="#company">Company</a></button>
       <button className="dropdown-btn" ><a href="#connect">Connect</a></button>
      </div>
       <button className='btn2'><a href="#Login">Login</a></button>
       <button className='btn'><a href="#SignUp">SignUp</a></button>
     </div>
    </div>
  );
};

export default Navbar;
