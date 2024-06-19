import './Bottom.scss';

const Footer = () => {
  return (
    <div className='FooterWrapper'>
      <div className='FooterContent'>
        <h2>Blogr</h2>
        <div className='FooterLinks'>
          <div>
            <h3>Product</h3>
            <a href="#overview">Overview</a>
            <a href="#pricing">Pricing</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#features">Features</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="#newsletter">Newsletter</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Footer;
