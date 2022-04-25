import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div>
                <section className="article-area ptb-100">
			<div className="container">
                <div className="row">
                    <div className="col-lg-12">
						<div className="sec-title mb-50">
							<h2>TIPS AND <span>ARTICLES </span></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
						</div>
                    </div>
                </div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="article-box">
							<img src="assets/img/article/a1.jpg" alt="article"/>
							<ul>
								<li><a href="/#"><i className="icofont icofont-ui-user"></i> By Admin</a></li>
								<li><a href="/#"><i className="icofont icofont-speech-comments"></i> 201 comment</a></li>
								<li><a href="/#"><i className="icofont icofont-ui-calendar"></i> 20 - 05 - 2018</a></li>
							</ul>
							<p>These cases are perfectly simple and easy to distinguish.</p>
							<a href="/#">Read More</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="article-box">
							<img src="assets/img/article/a2.jpg" alt="article"/>
							<ul>
								<li><a href="/#"><i className="icofont icofont-ui-user"></i> By Admin</a></li>
								<li><a href="/#"><i className="icofont icofont-speech-comments"></i> 201 comment</a></li>
								<li><a href="/#"><i className="icofont icofont-ui-calendar"></i> 20 - 05 - 2018</a></li>
							</ul>
							<p>These cases are perfectly simple and easy to distinguish.</p>
							<a href="/#">Read More</a>
						</div>
					</div>
					<div className="col-lg-4 d-md-none d-lg-block">
						<div className="article-box">
							<img src="assets/img/article/a3.jpg" alt="article"/>
							<ul>
								<li><a href="/#"><i className="icofont icofont-ui-user"></i> By Admin</a></li>
								<li><a href="/#"><i className="icofont icofont-speech-comments"></i> 201 comment</a></li>
								<li><a href="/#"><i className="icofont icofont-ui-calendar"></i> 20 - 05 - 2018</a></li>
							</ul>
							<p>These cases are perfectly simple and easy to distinguish.</p>
							<a href="/#">Read More</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="partner-slide owl-carousel">
							<div className="single-item">
								<img src="assets/img/partner/1.png" alt="item"/>
							</div>
							<div className="single-item">
								<img src="assets/img/partner/2.png" alt="item"/>
							</div>
							<div className="single-item">
								<img src="assets/img/partner/3.png" alt="item"/>
							</div>
							<div className="single-item">
								<img src="assets/img/partner/4.png" alt="item"/>
							</div>
							<div className="single-item">
								<img src="assets/img/partner/2.png" alt="item"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
            </div>
        )
    }
}
