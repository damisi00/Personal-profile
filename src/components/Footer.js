import Zuri from '../assets/zuri-logo.svg';
import I4G from '../assets/i4g.png';

const Footer = () => {
  return (
    <footer>
        <div className='footer-wrapper'>
        <img src={Zuri} alt='zuri logo' className='zuri-logo'/>

        <h6>HNG Intership 9 Frontend Task</h6>

        <img src={I4G} alt='i4G logo' className='i4g-logo'/>
        
        </div>
  </footer>
  )
}

export default Footer