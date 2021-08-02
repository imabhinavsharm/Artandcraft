import React from 'react'
import CountUp from 'react-countup';
import '../App.css';
import { Card } from '../Components/Card'
import data from '../Components/Data'
import img1 from '../images/IMG-5991.JPG'
import img2 from '../images/IMG-5962.JPG'
import img3 from '../images/IMG-5971.JPG'
import img4 from '../images/user1 (1).jpg'
import img5 from '../images/user1 (2).jpg'
import img6 from '../images/user1 (3).jpg'
import img7 from '../images/user1 (4).jpg'
import img8 from '../images/user1 (5).jpg'
import img9 from '../images/user1 (6).jpg'

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ height: "85vh" }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 images-slider" alt="..." style={{ height: "85vh" }} />

          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." style={{ height: "85vh" }} />

          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." style={{ height: "85vh" }} />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cardSection">
        <div className="cardSection-inner">

          <marquee> <h3>Art & Craft make your home elegant & luxurious</h3></marquee>
          <div className="container-fluid nav-bg">
            <div className="row">
              <div className="col-12 mx-auto">

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {
                    data.map((val, ind) => {
                      return <Card
                        key={ind}
                        imgsrc={val.imgsrc}
                        heading={val.heading}
                        para={val.para}
                      />
                    })
                  }

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="parallax">
        <div className="parallaxInside">
          <div className="parallaxContent">
            <h1 style={{ color: "#42d113" }}>Art & Craft</h1>
            <h3>Welcome to the world of Beautiful & Luxurious Products from <span> Art & Craft</span> </h3>
            <h2> we make,beautiful & luxurios Stone utensils and decorative items for the people, who loves traditional items with a modern touch, always with a standard of excellence and guided by our core values.</h2>
          </div>
          <div className="follow" style={{ display:"flex",flexDirection:"column"}}>
            <h1 style={{ color: "#fff"}}>follow us </h1>
            
            <div className="follows ">
            
              <a href="https://www.instagram.com/artc.raft123/" target="_blank"><i className="fa fa-instagram icons" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/Art-Craft-110633641286859/" target="_blank"><i className="fa fa-facebook icons" aria-hidden="true"></i></a>
              <i className="fa fa-google icons" aria-hidden="true"></i>
               <a href="https://twitter.com/ARTCRAF09993930" target="blank"><i className="fa fa-twitter icons" aria-hidden="true"></i></a>

            

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators carousel-indicatorss">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div className="row">
                    <h1 style={{ textAlign: "center",color:"#42d113" }}>Our Reviews</h1>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img4} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">Laura Marsh</h2>

                          <p style={{fontSize:"17px"}}>If you want to give your  house  a modern and luxurious touch  the then art & craft is your place their kitchenware  product gives your kitchen elegant and classy look as you desired . </p>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img5} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">Daniel smith</h2>
                          <p style={{fontSize:"17px"}}>Always a high quality products when ever i need some marbles products for my house and office . No disappointment at all . Best kitchenware products, best decorative items, best wine holders with appreciable craftmanship. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img6} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">Sarah cross</h2>
                          <p style={{fontSize:"17px"}}>&nbsp;Last year i want to renovate my old house one of my friend suggest checkout the marbles products from art & craft their product are very beautiful and  of high quality it  gave splendour look to my house .</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="carousel-item ">
                  <div className="row">
                  <h1 style={{ textAlign: "center",color:"#42d113" }}>Our Reviews</h1>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img7} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">Kate edwards</h2>
                          <p style={{fontSize:"17px"}}>Always get astonished with the quality of their product they look very shiny after lot of years and more importantly the service they provide so whenever i need something new for my house decoration i always go to the art & craft .</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img8} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">David white</h2>
                          <p style={{fontSize:"17px"}}>When i need something for my house art & craft is my go to place their products is very luxurios and amazing they look good as well as there quality is also very good .&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-aera">
                          <img src={img9} width="100%" height="100%" alt="" />
                        </div>
                        <div className="img-text">
                          <h2 className="names">Kathrine Taylor</h2>
                          <p style={{fontSize:"17px"}}>&nbsp;Products here is very good. Service  is very good and their products designs is amazing. A perfect place for  marble decorative or bathroomware products for your house.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="countervariables" >
          <div className="headVari">
          <i class="fa fa-handshake-o vari" aria-hidden="true" style={{color:"#fff"}}></i>
            <h3 style={{ color: "#fff" }}>Happy customers</h3>
            <h1 className="vari"><CountUp delay={3} end={100 } style={{ color: "#fff" }} />  </h1>
          </div>
          <div className="headVari">
          <i class="fa fa-users vari" aria-hidden="true" style={{color:"#fff"}}></i>
            <h3 style={{ color: "#fff" }}>Team Members</h3>
            <h1 className="vari"><CountUp delay={3} end={50} style={{ color: "#fff" }} /></h1>
          </div>
          <div className="headVari">
          <i class="fa fa-globe vari" aria-hidden="true" style={{color:"#fff"}}></i>
            <h3 style={{ color: "#fff" }}>Countries Served</h3>
            <h1 className="vari"><CountUp delay={3} end={20} style={{ color: "#fff" }} /></h1>
          </div>
          <div className="headVari">
          <i class="fa fa-exclamation-triangle vari" aria-hidden="true" style={{color:"#fff"}}></i>
            <h3 style={{ color: "#fff" }}>Complains</h3>
            <h1 className="vari"><CountUp start={30} delay={3} end={0} style={{ color: "#fff" }} /></h1>
          </div>


        </div>
      </div>




    </>
  )
}

export default Home
