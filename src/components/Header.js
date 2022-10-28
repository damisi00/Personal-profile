import ProfileImg from '../assets/profile.png';
import ShareBtn from '../assets/share.svg';
import EllipseBtn from '../assets/ellipse.svg';

const Header = () => {
  return (
    <section className='profile-section'>
          <img src={ProfileImg} alt='profile' id='profile__img' />
          <a href='/' className='share desktop-btn'><img src={ShareBtn} alt='button'/></a>
          <a href='/' className='share mobile-btn'><img src={EllipseBtn} alt='button'/></a>
          <h3 id='twitter'>CDamiiisi</h3>
          <h3 id='slack'>ToluMic</h3>
    </section>
  )
}

export default Header