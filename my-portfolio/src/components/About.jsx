import './About.css'
import Portfolio_img from '../assets/Images/MaePortfolio.jpg'
import Introducction_illustration from '../assets/Images/Introduction_illustration.svg'
import Mail from '../assets/Images/Mail.png'
import Linkedin from '../assets/Images/Linkedin.png'
import Github from '../assets/Images/Github.png'




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
                            <img src={Introducction_illustration} alt="Web development illustration" height={120} />
                        </div>
                    </div>
                </div>
                <div className='About__GetinT'>
                    <h2>Get in touch</h2>
                    <div className='About__GetinT--grid GetinT'>
                        <a href="mailto:asmaecharroudd@gmail.com">
                            <div href="mailto:asmaecharroudd@gmail.com" className='GetinT__Mail'>
                                <img src={Mail} alt="Mail icon" height={60} />
                                <div class="linea-con-bolas"></div>
                                <p>send me an email</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/asmae-c-3a10b2255/">
                            <div className='GetinT__Linkedin'>
                                <img src={Linkedin} alt="Linkedin icon" height={60} />
                                <div class="linea-con-bolas"></div>
                                <p>check out my profile</p>
                            </div>
                        </a>
                        <a href="https://github.com/AsmaeCharr">
                            <div className='GetinT__Github'>
                                <img src={Github} alt="Github icon" height={60} />
                                <div class="linea-con-bolasB"></div>
                                <p>look into my projects</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
