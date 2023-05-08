import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import './about.css';
import team1 from '../Images/about/team1.png'
import team2 from '../Images/about/team2.jpg'
import team3 from '../Images/about/team3.jpg'
import team4 from '../Images/about/team4.jpg'
import team5 from '../Images/about/team5.jpg'
import team6 from '../Images/about/team6.jpg'
import client1 from '../Images/clients/client1.png'
import client2 from '../Images/clients/client2.png'
import client3 from '../Images/clients/client3.png'
import client4 from '../Images/clients/client4.png'
import boooikR from '../Images/about/boooikR.jpg'


export default function About() {
  return (
    <div>
      <Header/>
      

      <div class="aboutcont">
        <div class="abcontainer-sub">
              
          
        
          <div class="about__item ">
            <h3>Who We Are ?</h3>
            <p>We admit that we're book snobs. We want it that way because not just any book can be a book of "Tech World." 
                We are still growing our business, and we anticipate that our website will soon be your one-stop shop 
                for all your needs. If you have any questions, please send us an email or give us a call; we would be delighted to hear from you.
            </p>
          </div>
                
          <div class="about__item">
            <h3>What We Do ?</h3>
            <p>We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, 
              History, Religions, Self-Help, and Children. We likewise move in immense accumulation of Investments and 
              Management, Computers, Engineering, Medical, College, and School content references books proposed by various 
              foundations as scheduled the nation over. Besides this, we offer an expansive gathering of E-Books at a reasonable value.
            </p>
          </div>
                
          <div class="about__item">
            <h3>Why Choose Us?</h3>
            <p>We endeavor to broaden consumer loyalty by providing food with simple easy-using web indexes, brisk and 
              easy-to-understand installment alternatives, and snappier conveyance frameworks. Upside to the majority of this, 
              we are arranged to give energizing offers and charming limits on our books. 
              Too, we modestly welcome every one of the merchants around the nation to band together with us. We will, without a doubt, 
              give you the stage to many shimmering areas and develop the “Tech World” family. We might want to thank you for shopping with us.
            </p>
          </div>
            
        </div>
      </div>

      <div class="counter spad">
        <div class="container">
          
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">91</h2>
                </div>
                <span>Our <br />Clients</span>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">9</h2>
                </div>
                <span>Total <br />Brands</span>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">16</h2>
                </div>
                <span>Outreach <br />Partners</span>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">87</h2>
                  <strong>%</strong>
                </div>
                <span>Happy <br />Customer</span>
              </div>
            </div>
          
        </div>
      </div>

      <div class="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Meet Our Team</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team1} alt="member 1"  className='developer_images'/>
                <h4>Yadheeshani Shakilanka Edirisinghe</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team2} alt="member 2"  className='developer_images'/>
                <h4>Seyon Suriyakumaran</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team3} alt="member 3" className='developer_images'/>
                <h4>Hiran Sanjeewa</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team4} alt="member 4" className='developer_images'/>
                <h4>Vidhush Thamilchelvan</h4>
                <span>Web Developer</span>
              </div>
            </div>
			      <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team5} alt="member 5" className='developer_images'/>
                <h4>Saman Kumara Rajapaksha</h4>
                <span>Web Developer</span>
              </div>
            </div>
			      <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src={team6} alt="member 6" className='developer_images'/>
                <h4>Kavindu Sandaruwan Dayarathna</h4>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clients">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Our Partners</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src={client1} alt="client 1" className='client_images'/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src={client2} alt="client 2" className='client_images'/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src={client3} alt="client 3" className='client_images'/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src={client4} alt="client 4" className='client_images'/></a>
            </div>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
    
  )
}

