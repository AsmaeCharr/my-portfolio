import './About.css'
import Portfolio_img from '../assets/Images/MaePortfolio.jpg'


function About() {
    return (
        <div className="About--grid">
            <div className="About__image">
                <img src={Portfolio_img} alt="Asmae's Image" height={550} />
            </div>
            <div className="About__description">
                <div className='About__introduction'>
                    <h2>Introduction</h2>
                </div>
                <div className='About__GetinT'>
                    <h2>Get in touch</h2>
                    <div className='About__GetinT--grid'></div>
                </div>
            </div>
        </div>
    )
}

export default About
