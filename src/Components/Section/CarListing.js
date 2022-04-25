import React, { Component } from 'react'

export default class CarListing extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2>Car Listing</h2>
						<ul>
							<li><a href="index-2.html">Home</a></li>
							<li className="active"><a href="carlisting.html">Car Listing</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section className="ptb-100 list-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="single-post listing-post">
							<div className="row flexbox-center">
								<div className="col-sm-5">
									<div className="post-thumbnail">
										<a href="/#"><img src="assets/img/list/list1.jpg" alt="blog"/></a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="post-details">
										<a href="/#"><h4 className="post-title">MERCEDES-BENZ C 220</h4></a>
										<p>Lorem ipsum dolor sit amet consectetur Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant[…]</p>
										<a href="/#" className="theme-btn theme-btn2">$45,000</a>
									</div>
								</div>
							</div>
						</div>
						<div className="single-post listing-post">
							<div className="row flexbox-center">
								<div className="col-sm-5">
									<div className="post-thumbnail">
										<a href="/#"><img src="assets/img/list/list2.jpg" alt="blog"/></a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="post-details">
										<a href="/#"><h4 className="post-title">LAMBORGHINI LP610-4</h4></a>
										<p>Lorem ipsum dolor sit amet consectetur Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant[…]</p>
										<a href="/#" className="theme-btn theme-btn2">$45,000</a>
									</div>
								</div>
							</div>
						</div>
						<div className="single-post listing-post">
							<div className="row flexbox-center">
								<div className="col-sm-5">
									<div className="post-thumbnail">
										<a href="/#"><img src="assets/img/list/list3.jpg" alt="blog"/></a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="post-details">
										<a href="/#"><h4 className="post-title">LAMBORGHINI LP610-4</h4></a>
										<p>Lorem ipsum dolor sit amet consectetur Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant[…]</p>
										<a href="/#" className="theme-btn theme-btn2">$45,000</a>
									</div>
								</div>
							</div>
						</div>
						<div className="single-post listing-post">
							<div className="row flexbox-center">
								<div className="col-sm-5">
									<div className="post-thumbnail">
										<a href="/#"><img src="assets/img/list/list4.jpg" alt="blog"/></a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="post-details">
										<a href="/#"><h4 className="post-title">AUDI R8 V10 PLUS</h4></a>
										<p>Lorem ipsum dolor sit amet consectetur Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant[…]</p>
										<a href="/#" className="theme-btn theme-btn2">$45,000</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="sidebar">
							<h4 className="search_title">search options</h4>
							<div className="list-sidebar">
								<h5>KEYWORD</h5>
								<input type="text" placeholder="Keyword..."/>
								<h5>VEHICLE TYPE</h5>
								<select>
									<option value="a">All Types</option>
									<option value="b">Type 1</option>
									<option value="c">Type 2</option>
									<option value="d">Type 3</option>
								</select>
								<h5>MAKE</h5>
								<select>
									<option value="a">All Make</option>
									<option value="b">Make 1</option>
									<option value="c">Make 2</option>
									<option value="d">Make 3</option>
								</select>
								<h5>MODEL</h5>
								<select>
									<option value="a">All Model</option>
									<option value="b">Model 1</option>
									<option value="c">Model 2</option>
									<option value="d">Model 3</option>
								</select>
								<h5>MODEL YEAR</h5>
								<select>
									<option value="a">Min Year</option>
									<option value="b">Year 1</option>
									<option value="c">Year 2</option>
									<option value="d">Year 3</option>
								</select>
								<select>
									<option value="a">Max Year</option>
									<option value="b">Year 1</option>
									<option value="c">Year 2</option>
									<option value="d">Year 3</option>
								</select>
								<h5>FUEL TYPE</h5>
								<select>
									<option value="a">All Types</option>
									<option value="b">Type 1</option>
									<option value="c">Type 2</option>
									<option value="d">Type 3</option>
								</select>
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
