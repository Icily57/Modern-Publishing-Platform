import './Navigation.scss';

const Navbar = () => {
  return (
    <div className="Nav">
      <div className='Logo'>Blogr</div>
      <div className="NavLinks">
        <a href="#product">Product</a>
        <a href="#company">Company</a>
        <a href="#connect">Connect</a>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
