import React from 'react'
import './Mission.css'
const Mission = () => {
  return (
    <>
      <div className="m-wrapper">
        <div className="container">
            <div className="col-md-12">
                <div className="navsitem">
                <ul class="nav nav-tabs" id="myTab" role="tablist">

                <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Our Mission</button>
                </li>

                <li class="nav-item" role="presentation">
                <button class="nav-link tavsButton" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Strategy</button>
                </li>

                <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Integrity</button>
                </li>
                </ul>

                </div>

            <div class="tab-content" id="myTabContent">

                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row tabDirection">
                        
                            <div className="col-md-6 col-sm-5">
                                <div className="img">
                                <img src="/public/4.jpg" alt="" className='img-fluid'/>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-7">
                                <div className="missionText">
                                    <h2>Printing And Cutting</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam?</p>
                                    <button>Know More?</button>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>

                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row tabDirection">
                        <div className="col-md-6 col-sm-5">
                            <div className="img">
                            <img src="/public/strategy.jpg" alt="" className='img-fluid'/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-7">
                            <div className="missionText">
                                <h2>Invitation on an advantages</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam?</p>
                                <button>Know More?</button>
                            </div>
                        
                        
                     </div>
                     </div>
                </div>

                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="row tabDirection">
                     <div className="col-md-6 col-sm-5">
                         <div className="img">
                         <img src="/public/3.jpg" alt="" className='img-fluid'/>
                         </div>
                     </div>
                     <div className="col-md-6 col-sm-7">
                         <div className="missionText">
                             <h2>Little afraid its eat looked</h2>
                             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas harum officia delectus adipisci inventore aspernatur culpa reprehenderit omnis molestiae? Culpa at explicabo ipsa earum velit quos, eligendi beatae laudantium veniam?</p>
                             <button>Know More?</button>
                         </div>
                     </div>
                     </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Mission;
