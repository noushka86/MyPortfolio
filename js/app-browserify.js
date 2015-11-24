// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let React = require('react'),
    $ = require('jquery'),
    Backbone = require('backbone'),
    _ = require('underscore')

import {Home} from "./Home.js"



// var expertise=['Database Design', 'Parse', 'Rest API','Javascript','React','Backbone', 'jQuery', 'Asynchronous Programing', 'UNIX', 'HTML', 'CSS/SCSS', 'Responsive Design ' ]


var MyRouter=Backbone.Router.extend({

	routes:{
		home:'showHome',
		'*default':'changeHashToHome'
	},

	changeHashToHome:function(){
		location.hash="home"
	},


	showHome:function(){
		React.render(<Home/>, document.querySelector('#container'))
	},

	initialize:function(){
		Backbone.history.start()
	}


})

var router=new MyRouter();