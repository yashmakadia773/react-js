import React from "react"

const Service = ({ data }) => {
    // console.log(data);
    return (
        <section id="services">
            <h1 class="sec-heading">Our Services</h1>
            <ul>
                {
                    data.map((val, ind) => {
                        return (
                            <React.Fragment key={ind}>
                                <li>
                                    <div>
                                        <img src={val.img} alt="" width={"200px"} />
                                        <h1>    {val.title}      </h1>
                                        <a href="">
                                            <i class="fas fa-laptop"></i><span>{val.desc}</span>
                                        </a>
                                    </div>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>

            <div id="service-footer">
                <a href="" class="brand-btn">View All Service</a>
            </div>
        </section>)
}
export default Service