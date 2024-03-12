import React from 'react'
import { Link } from 'react-router-dom'
import { Navdata } from '../Navdata'

const About = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <a href="">Home</a>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                Navdata.map((val, ind) => {
                                    return (
                                        <li class="nav-item active">
                                            <Link to={`${val.path}`} class="nav-link ">{val.name}</Link>
                                        </li>
                                    )
                                })
                            }

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
            
    </div>
  )
}


export default About