import React from 'react'
import './Details.css'
const Details = () => {
  return (
    <>
      <div className="detailsAbout">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-5">
                    <div className="detailsImage">
                        <img className='firstimg' src="/public/strategy.jpg" alt="experience" />
                        <img src="/public/3.jpg" alt="experience" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-7">
                    <div className="experience">
                        <h4>Welcome To Ottrali</h4>
                        <h2>A Construction Company</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nulla esse eum in delectus sequi necessitatibus nobis dolorum expedita, aut minima culpa porro quasi eveniet, error perferendis blanditiis. Qui sequi iure pariatur rem quisquam!</p>
                        <div className="year">
                            <h1>8</h1>
                            <h5>Years Experience Working</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Details
