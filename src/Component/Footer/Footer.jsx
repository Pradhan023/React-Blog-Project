import { Link } from 'react-router-dom'
import './Footer.css'
import Tele from '../../assets/telephone-call.png'
import Mail from '../../assets/email.png'
import Insta from '../../assets/instagram.png'
import Fb from '../../assets/facebook.png'
import Tweet from '../../assets/twitter.png'

const Footer = () => {
  const ScrolltoTop = () => {
    window.scrollTo(0,0);
  }
  return (
    <>
    <div className='Footer-Grid-Parent'>
        <div className="foot-1">
        <div className="foot-siren">
          <p>The</p>
          <h2>Siren</h2>
        </div>
        <p className='foot-summary'>The Siren is the Blog site Where You can find latest articles , news , stories about Bollywood , Hollywood , Technology , Fitness , Food in one Click. We provide you all the nearest goosips and fun talks.</p>
        </div>
        <div className="foot-2">
            <div className="foot-flex1">
                <h1>Quick Links</h1>
                {/* <p> */}
                <Link to='/' className='flink' onClick={ScrolltoTop}>Home</Link>
                <Link to='/bollywood' className='flink' onClick={ScrolltoTop} >Bollywood</Link>
                <Link to='/hollywood' className='flink' onClick={ScrolltoTop} >Hollywood</Link>
                <Link to='/technology' className='flink' onClick={ScrolltoTop} >Technology</Link>
                <Link to='/fitness' className='flink' onClick={ScrolltoTop} >Fitness</Link>
                {/* </p> */}
            </div>
        </div>
        <div className="foot-3">
            <div className="foot-flex2">
                <h1>Contact Us</h1>
                <p className='foot-text'><img src={Tele} /><span>+91 6005043329</span></p>
                <p className='foot-mail'><img src={Mail}/><span>anishpradha5523@gmail.com</span></p>
                
                <h2>Follow Us</h2>
                <div className='foot-logo'>
                    <img src={Insta} />
                    <img src={Fb} />
                    <img src={Tweet} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer