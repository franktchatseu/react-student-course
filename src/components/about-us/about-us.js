import React from "react";
import "./about-us.scss"
import $ from 'jquery';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
	static defaultProps = {
		count: 1,
		autoPlay: false,
		timeToSlide: 5000,
		showDots: true,
		pauseOnMouseOver: true,
		responsive: []
	};

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			count: props.count,
			lastIndex: Math.ceil(props.children.length / props.count) - 1,
			interval: null
		};
		this.handleKeys();
		this.interval = false;
		this.autoPlay();
	}

	autoPlay = () => {
		if (this.props.autoPlay) {
			this.interval = setInterval(() => {
				this.nextSlide();
			}, this.props.timeToSlide);
		}
	};

	stopAutoPlay = () => {
		if (this.props.autoPlay && this.props.pauseOnMouseOver) {
			clearInterval(this.interval);
		}
	}

	handleKeys = () => {
		document.addEventListener('keydown', (event) => {
			const key = event.keyCode;
			switch (key) {
				case 37: this.previousSlide();
					break;
				case 39: this.nextSlide();
					break;
			}
		});
	};

	previousSlide = () => {
		let index = this.state.index;
		index--;
		if (index === -1) index = this.state.lastIndex;
		this.setSlide(index);
	};

	nextSlide = () => {
		let index = this.state.index;
		if (index === this.state.lastIndex) index = 0;
		else index++;
		this.setSlide(index);
	};

	setSlide = (i) => {
		this.setState({
			index: i
		});
	};

	getSlides = () => {
		const { children } = this.props;
		let slides = [];
		let i = 0;
		while (i < children.length) {
			let slideItems = [];
			for (var j = 0; j < this.state.count && i < children.length; j++) {
				let slideItem = (
					<section key={i} className="slider-item">
						{children[i]}
					</section>
				);
				slideItems.push(slideItem);
				i++;
			}
			let slide = (
				<section key={i} className="slider-slide">
					{slideItems}
				</section>
			);
			slides.push(slide);
		}
		return slides;
	};

	identifyCount = () => {
		const { responsive, count, children } = this.props;
		let width = $(window).width();
		let currentCount = count;
		responsive.forEach((media) => {
			if (media.min_width < width) {
				currentCount = media.count;
			}
		});
		if (currentCount !== this.state.count) {
			this.setState({
				index: 0,
				count: currentCount,
				lastIndex: Math.ceil(children.length / currentCount) - 1
			});
		}
	};

	componentWillMount() {
		this.identifyCount();
		$(window).resize(this.identifyCount);
	}

	render() {
		const { index } = this.state;
		const { showDots } = this.props;
		let contentStyle = { left: index * -100 + "%" };
		const slides = this.getSlides();

		return (
			<section className="slider" onMouseOver={this.stopAutoPlay}>
				<section className="slider-content" style={contentStyle}>
					{slides}
				</section>
				{
					showDots && slides.length > 1 &&
					<section className="slider-dots">
						{slides.map((slide, i) => {
							const onClick = i === index ? null : () => this.setSlide(i);
							return <span key={i} className={`slider-dot ${i === index ? "selected" : ""}`} onClick={onClick} />
						})}
					</section>
				}
			</section>
		);
	}
}

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					title: "React",
					text: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
					image: "https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
				},
				{
					title: "HTML",
					text: "HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage. Other technologies besides HTML are generally used to describe a webpage's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
					image: "https://hostpapa.blog/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg"
				},
				{
					title: "CSS",
					text: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
					image: "https://constructs.stampede-design.com/wp-content/uploads/2014/10/css3.jpg"
				},
				{
					title: "Javascript",
					text: "JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
					image: "https://cdn-images-1.medium.com/max/785/0*Co9Hk-VtMLfM08KH.png"
				}
			],
			about:{
				title: "A PROPOS DE NOUS",
				description: " Uniquely reintermediate customized methods of empowerment after cutting-edge convergence. Efficiently underwhelm functionalized value before worldwide services. Distinctively synergize synergistic infomediaries before low-risk high-yield methods.,Uniquely reintermediate customized methods of empowerment after cutting-edge convergence. Efficiently underwhelm functionalized value before worldwide services. Distinctively synergize synergistic infomediaries before low-risk high-yield methods."
			}
		};
	}

	render() {
		const SlideSettings = {
			count: 1,
			autoPlay: true,
			timeToSlide: 500,
			showDots: true,
			pauseOnMouseOver: true,
			responsive: [
				{
					min_width: 700,
					count: 2
				},
				{
					min_width: 1000,
					count: 1
				}
			]
		}
		return (
			<div className="content-about">
				<span className="title"> {this.state.about.title} </span>
				<p className="description">
					{this.state.about.description}
				</p>
				<Slider {...SlideSettings}>
					{this.state.items.map((item, i) => {
						return (
							<section key={i} className="container-slider">
								<section className="text-section">
									<h1>{item.title}</h1>
									<p>{item.text}</p>
								</section>
								<section className="image-section">
									<img src={item.image} alt="Language" />
								</section>
							</section>
						);
					})}
				</Slider>
			</div>

		);
	}
}

