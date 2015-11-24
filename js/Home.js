
let React = require('react')

var Home=React.createClass({
	



	render:function(){



		return(
			<div>
				<div id="hero">
					<div id="navbar">
						<div id="title">
							<h4>Noa Iolin-Deuitsch</h4>
							<h5>Front End Web Developer</h5>
						</div>
					</div>
					<div id="moto">
					<h1>Follow Your Passion</h1>
					<h3>And Success will follow you</h3>
					</div>

				</div>

				<div id="technical">
					<h3>Technical Expertise</h3>
					<div id="tech">
						<p>Database Design</p>
						<p>Parse</p>
						<p>Rest API</p>
						<p>Javascript</p>
						<p>React</p>
						<p>Backbone</p>
						<p>jQuery</p>
						<p>Asynchronous Programing</p>
						<p>UNIX</p>
						<p>HTML</p>
						<p>CSS/SCSS</p>
						<p>Responsive Design</p>	
					</div>
				</div>


				<div id="proj-container">
					<h3>My Projects</h3>
					<div id="projects">
						<div className="project" id="smartsit">
						<a target="_blank" href="http://www.smartsit.net/"><img src="./images/sitter.png"></img></a>
							<p>SmartSit</p>
							<p>Baby-sitter Management/scheduling app</p>
							<a target="_blank" href="https://github.com/noushka86/EventSitter">Check the code on GitHub</a>
						</div>
						<div className="project" id="weather">
								<a target="_blank" href="http://above-the-clouds.noaiolin.com/"><img src="./images/weather.png"></img></a>
							<p>Above The Clouds</p>
							<p>Weather App</p>
							<a target="_blank" href="https://github.com/noushka86/weather-app">Check the code on GitHub</a>

						</div>
						<div className="project" id="clock">
							<img src="./images/clock.png"></img>
							<p>Color Clock</p>
							<p>Representing hex colors as a function of time</p>
							<a target="_blank" href="https://github.com/noushka86/colorClock">Check the code on GitHub</a>

						</div>
						
						<div className="project" id="git">
						<a target="_blank" href="http://git-profile-lookup.noaiolin.com/"><img src="./images/git.png"></img></a>
							<p>GitHub Profile Lookup</p>
							<p>GitHub Profile Lookup</p>
							<a target="_blank" href="https://github.com/noushka86/gitProfile">Check the code on GitHub</a>
						</div>
						<div className="project" id="invaders">
							<a target="_blank" href="http://git-profile-lookup.noaiolin.com/"><img src="./images/southpark.png"></img></a>
							<p>South Park Invaders</p>
							<p>Just for fun!
							<span><br>Fun Project-Space Invaders game in the form of Kenny and Cartman</br></span>
							</p>
							<a target="_blank" href="https://github.com/noushka86/gitProfile">Check the code on GitHub</a>
						</div>
						<div className="project" id="etsy">
							<a target="_blank" href="http://etsy-clone.noaiolin.com/"><img src="./images/etsy.png"></img></a>
							<p>Etsy Clone</p>
							<p>Etsy Clone</p>
							<a target="_blank" href="https://github.com/noushka86/estsy">Check the code on GitHub</a>
						</div>
						<div className="project" id="soundcloud">
							<a target="_blank" href="http://soundCloud-clone.noaiolin.com/"><img src="./images/etsy.png"></img></a>
							<p>SoundCloud Clone</p>
							<p>SoundCloud Clone</p>
							<a target="_blank" href="https://github.com/noushka86/soundCloud/">Check the code on GitHub</a>
						</div>
					</div>
				</div>
				
				<div id="about-me">
					<h3>About Me</h3>
					<div>
						<img src="./images/Headshot.jpg"></img>
						<p>
							I am a Houston based front end developer that is looking for her next challenge.
							<br></br>
							<br></br>
							I have BSc. in Computer Science and Mathematics from Netanya academic collage, Israel. In the last 4 years I have worked for RSA Security out of Israel as a cyber-fraud intelligence analyst, during those years I have truly enjoyed doing what I was tasked to do, and I also enjoyed the professional challenges I faced there, and I took great joy with helping making the internet a safer place, by taking down malicious and fraudulent activity.
							<br></br>
							<br></br>
							During the course of the last year, I had moved from Israel, to Houston, Texas. Here I have decided to make a career change, and transition from Cyber security into front end software development. Enabling this change was when I have successfully completed a 12 weeks coding boot camp at the Iron Yard of Houston, where I have acquired front end development capabilities such as Javascript, React, Backbone, responsive design, and have also completed a practical project, that I have fully developed myself (smartsit.net)
							At present, I am learning new development skills such as Meteor, ruby, Angular and Ember.
							<br></br>
							<br></br>
							I believe that I have a lot to give to a new place that will employ me as a developer, as I am a very passionate person, that loves to think out of the box and puts in everything I have until the task gets completed. 
							<br></br>
							<br></br>
							The fact that I had to transition to a completely new environment, where I was faced with new language and social environment, drove me into the personal improvement mode that I am in right now, which gave me the courage to leave my comfort zone, and venture into learning a new skill such as a front end development, I believe that this is my personal differentiator, and that is my personal success story.
						</p>
					</div>
				</div>

				<div id="contact">
					<h3>Lets Connect</h3>
					<p>I'd love to hear from you!</p>
					<p>If it's a feedback, a job opportunity or a question - please feel free to contact me!</p>
					
					<a target="_blank" href="https://www.linkedin.com/in/noa-iolin-48073785"><img width="50px" src="./images/linkedIn.png" id="linkedin"></img></a>
					<a target="_blank" href="mailto:noa.iolin@gmail.com"><img width="48px" src="./images/Email.svg" id="email"></img></a>
					<a target="_blank" href="https://github.com/noushka86"><img width="55px" src="./images/gitgirl.png" id="gitgirl"></img></a>
				</div>

			</div>
			)
	}
})







export {Home}