import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import './about.css';

export default function About() {
  return (
    <div>
      <Header/>

      <div class="aboutcont">
        <div class="abcontainer-sub">
             
          <div class="about__pic">
            <h6>Image Here</h6>
            <img src="Images/about/boooikR.png" alt="main image"/>
          </div>     
          
        
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
                <img src="Images/about/team-1.png" alt="member 1" width="240px"/>
                <h4>Yadheeshani Shakilanka Edirisinghe</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="Images/about/team-2.jpg" alt="member 2" width="240px"/>
                <h4>Seyon Suriyakumaran</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="Images/about/team-3.jpg" alt="member 3"/>
                <h4>Hiran Sanjeewa</h4>
                <span>Web Developer</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="Images/about/team-4.jpg" alt="member 4"/>
                <h4>Vidhush Thamilchelvan</h4>
                <span>Web Developer</span>
              </div>
            </div>
			      <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="Images/about/team-5.jpg" alt="member 5"/>
                <h4>Saman Kumara Rajapaksha</h4>
                <span>Web Developer</span>
              </div>
            </div>
			      <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team__item">
                <img src="Images/about/team-6.jpg" alt="member 6"/>
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
              <a href="#" class="client__item"><img src="Images/clients/client-1.png" alt="client 1"/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src="Images/clients/client-2.png" alt="client 2"/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src="Images/clients/client-3.png" alt="client 3"/></a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item"><img src="Images/clients/client-4.png" alt="client 4"/></a>
            </div>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
    
  )
}

