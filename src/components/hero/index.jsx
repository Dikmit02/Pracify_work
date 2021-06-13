import './hero.css';
function Hero() {
  return (
    <section className='hero container d-flex align-items-center'>
      <section className='description'>
        <h1 className='brand-line-main'>Healthy life with
        <span className='brand-line-bold'>Nature Organic</span></h1>
        <p className='brand-line-explanation'>
          Vegetables are the edible parts of a plant that is used in cooking or
          can be eaten now.
        </p>
        <button className='btn'>Explore Now</button>
      </section>
      <section className='side-box justify-content-end position-relative'>
        <img className='flower-image' src='./asset/Group 195.png' alt='flower' />
        <div className='side-white-box'>
          <div className='side-image-box'>
            <img src='./asset/Group 228.png' className='side-box-image' alt='side' />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
