import './Body.scss';

const Main = () => {
  return (
    <div className='main'>
      <h2>Designed for the future</h2>
      <section className='section1'>
      <img className='img1' src='images/illustration-editor-desktop.svg' alt='editor' />
        <h3>Introducing an extensible editor</h3>
        <p> 
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
          The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
          videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
          change the looks of a blog.
        </p>
        <h3>Robust content management</h3>
        <p>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog 
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </section>
      <section className='section2'>
        <img className='img2' src='images/illustration-phones.svg' alt='phone' />
        <h3>State of the Art Infrastructure</h3>
        <p>
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
      </section>
      <section className='section3'>
        <img className='img3' src='images/illustration-laptop-desktop.svg' alt='laptop' />
        <h2>Free, open, simple</h2>
         <p>
        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
        <h2>Powerful tooling</h2>
        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.
        </p>
      </section>
    </div>
  );
};



export default Main;
