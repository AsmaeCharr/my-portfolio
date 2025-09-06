import './About.css'
import Portfolio_img from '../assets/Images/MaePortfolio.jpg'
import Introducction_illustration from '../assets/Images/Introduction_illustration.svg'

function About() {
    return (
        <div className="About--grid">
            <div className="About__image">
                <img src={Portfolio_img} alt="Asmae's Image" height={550} />
            </div>
            <div className="About__description">
                <div className='About__introduction Introduction'>
                    <h2>Introduction</h2>
                    <div className='Introduction__container'>
                        <h3>A junior web developer/designer</h3>
                        <div className='Introduction__container--grid'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eget faucibus volutpat, odio purus egestas nunc, eu pellentesque velit sem nec eros. Etiam egestas arcu eget orci scelerisque commodo. Fusce pharetra enim vitae lectus bibendum varius. Vivamus placerat aliquam lorem quis pharetra.</p>
                            <img src={Introducction_illustration} alt="Asmae's Image" height={150} />
                        </div>
                    </div>
                </div>
                <div className='About__GetinT'>
                    <h2>Get in touch</h2>
                    <div className='About__GetinT--grid GetinT'>
                        <div className='GetinT__Mail'>

                        </div>
                        <div className='GetinT__Linkedin'>

                        </div>
                        <div className='GetinT__Github'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
