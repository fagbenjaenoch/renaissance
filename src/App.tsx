import "./App.css";
import {
	CircleSegment,
	CogShape,
	Hand1,
	Hand2,
	QuadrantCircle,
	StarFlower,
} from "./components/icons";
import Ticker from "./components/ticker";

function App() {
	return (
		<div className="main">
			<section className="hero">
				<div className="wrapper">
					<div className="body">
						<h1 className="heading-font">Renaissance!</h1>
						<p className="body-font">
							The re-emergence of something after a long time of obscurity
						</p>
					</div>
					<div className="illustrations">
						<div className="hand1">
							<Hand1 width={"400px"} height={"400px"} />
						</div>
						<div className="hand2">
							<Hand2 width={"400px"} height={"400px"} />
						</div>
						<CogShape />
						<StarFlower />
						<CircleSegment />
						<QuadrantCircle />
					</div>
				</div>
			</section>
			<section className="ticker">
				<Ticker />
			</section>
			<section className="about">
				<div className="wrapper">
					<h2>Why does this page exist?</h2>
					<p>
						Nothing really serious. It's been almost 7 months I've written code
						and this was because I didn't have a personal computer after my
						previous semi-laptop(not kidding) was damaged.
					</p>
					<p>
						It was really tough for me. I lost my Job and lost a bit of
						confidence but I held on to hope--the hope that one day I will get a
						new laptop. I had to be delusional a bit and I was always searching
						for a new laptop to buy but I didn't have the money.
					</p>
					<p>
						Not until I broke out of my silence and reached out to an uncle of
						mine who decided to sponsor me and provide me with a new laptop.
					</p>
					<p>
						An that was how I came up with the word "Renaissance" just like how
						it was a revival of intellectualism after antiquity.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
