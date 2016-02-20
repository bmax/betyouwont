import React from 'react'

export default React.createClass({
  render() {
   return   (
    <section id="team" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/1.jpg" className="img-responsive img-circle" alt="" />
                        <h4>Brandon Max</h4>
                        <p className="text-muted">Lead Designer</p>
                        <ul className="list-inline social-buttons">
                            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/2.jpg" className="img-responsive img-circle" alt="" />
                        <h4>Phillip Prescher</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <ul className="list-inline social-buttons">
                            <li><a href="http://twitter.com/phillycheeze1" target="_blank"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="https://www.facebook.com/phillip.prescher" target="_blank"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/pprescher" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/3.jpg" className="img-responsive img-circle" alt="" />
                        <h4>Tanay Salpekar</h4>
                        <p className="text-muted">Lead Developer</p>
                        <ul className="list-inline social-buttons">
                            <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
)
}
});