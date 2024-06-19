import './Top.scss';
import Navbar from './Navigation';

const Header = () => {
  return (
    <div className='HeaderWrapper'>
      <Navbar />
      <div className='HeaderContent'>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className='ButtonGroup'>
          <button className="start">Start for Free</button>
          <button className="learn">Learn More</button>
        </div>
      </div>
    </div>
  );
};



export default Header;
