import React from 'react'
import './Breadcrumb.css'
const Breadcrumb = () => { 
  return (
    <>
    <div className="backgroundImg">
        <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="allBreadcrumb ">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">About</li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb
