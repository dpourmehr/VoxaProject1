/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
	var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
	var EventHandler = require('famous/core/EventHandler');
	var Easing = require('famous/transitions/Easing');
	var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");
	var GridLayout = require("famous/views/GridLayout");
	
	var eventHandler = new EventHandler();
	var index = -1;
	var johnsonLogo, andrewLogo, chrisLogo, dennisLogo, centerSpinModifierJohnson, centerSpinModifierAndrew, centerSpinModifierChris, centerSpinModifierDennis;
	var layout;
	var headerLogo;
	
    // create the main context
    var mainContext = Engine.createContext();
    var initialTime = Date.now();
	var container = new Surface({
		size: [700, 150]
	});
	
	createLayout();
	addHeader();
	addFooter();
	createSurfaces();
  	
	johnsonLogo.on('mouseover', function() {
		centerSpinModifierJohnson.setTransform(
			Transform.translate(0, 50, 0),
			{ duration : 500, curve: Easing.outBounce }
		);
		johnsonLogo.setContent('<font size="4">The definition of energetic, Johnson Cook is the fearless leader here at Voxa.<font size>');
	});
	
	johnsonLogo.on('mouseout', function() {
		centerSpinModifierJohnson.setTransform(
			Transform.translate(0, 0, 0),
			{ duration : 100, curve: Easing.outBounce }
		);
		johnsonLogo.setContent('<img src="http://voxa.com/wp-content/uploads/2014/03/johnson.jpg" width="100%" height="100%">');
	});
	
	andrewLogo.on('mouseover', function() {
		centerSpinModifierAndrew.setTransform(
			Transform.translate(0, 50, 0),
			{ duration : 500, curve: Easing.outBounce }
		);
		andrewLogo.setContent('<font size="4">A Voxan of epic proportions, Andrew Somoza is the rocket fuel for Team Voxa’s odyssey.');
	});
	
	andrewLogo.on('mouseout', function() {
		centerSpinModifierAndrew.setTransform(
			Transform.translate(0, 0, 0),
			{ duration : 100, curve: Easing.outBounce }
		);
		andrewLogo.setContent('<img src="http://voxa.com/wp-content/uploads/2014/03/andrew.jpg" width="100%" height="100%">');
	});
	
	chrisLogo.on('mouseover', function() {
		centerSpinModifierChris.setTransform(
			Transform.translate(0, 50, 0),
			{ duration : 500, curve: Easing.outBounce }
		);
		chrisLogo.setContent('<font size="2">Not knowing the word “Sleep”, Chris Halaschek has an insatiable appetite for real-time data analytics and machine learning.');
	});
	
	chrisLogo.on('mouseout', function() {
		centerSpinModifierChris.setTransform(
			Transform.translate(0, 0, 0),
			{ duration : 100, curve: Easing.outBounce }
		);
		chrisLogo.setContent('<img src="http://voxa.com/wp-content/uploads/2014/03/chris.jpg" width="100%" height="100%">');
	});
	
	dennisLogo.on('mouseover', function() {
		centerSpinModifierDennis.setTransform(
			Transform.translate(0, 50, 0),
			{ duration : 500, curve: Easing.outBounce }
		);
		dennisLogo.setContent('<font size="2">Having an obsession with writing incredibly beautiful lines of code, Dennis Coyle is a first round pick in the 2014 Voxan draft.');
	});
	
	dennisLogo.on('mouseout', function() {
		centerSpinModifierDennis.setTransform(
			Transform.translate(0, 0, 0),
			{ duration : 100, curve: Easing.outBounce }
		);
		dennisLogo.setContent('<img src="http://voxa.com/wp-content/uploads/2014/03/dennis.jpg" width="100%" height="100%">');
	});
	
    // your app here
	function createLayout() {
		layout = new HeaderFooterLayout({
			headerSize: 100,
			footer: 50
		});

		mainContext.add(layout);
	}
	
	function addHeader() {
		layout.header.add(new Surface({
			content: '<img src="http://voxa.com/wp-content/themes/voxa/img/text/voxa.png"></br>',
			classes: ["black"],	
			properties: 
			{
				color: 'white',
				lineHeight: "100px",
				textAlign: "center",
				verticalAlign: "center",
				backgroundColor: '#000'
			}
		}));
	}
	
	function addFooter() {
		layout.footer.add(new Surface({
		content: "Footer",
		classes: ["black"],
		properties: {
			lineHeight: "100px",
			textAlign: "center"
		}
		}));
	}
	function createSurfaces() {
		johnsonLogo = new Surface({
			size: [150, 150],
			content: '<img src="http://voxa.com/wp-content/uploads/2014/03/johnson.jpg" width="100%" height="100%">',
			classes: ['backfaceVisibility'],
			properties: {
				margins: '0px',
				padding: '10px',
				color: '#000',
				backgroundColor: '#FFF',
				textAlign: 'center',
				verticalAlign: 'middle',
				borderStyle: 'solid',
				borderWidths: '5px',
				fontWeight: 'strong'
			}
		});

		centerSpinModifierJohnson = new Modifier({
			origin: [ .20 , 0.5]
		});
		
		andrewLogo = new Surface({
			size: [150, 150],
			content: '<img src="http://voxa.com/wp-content/uploads/2014/03/andrew.jpg" width="100%" height="100%">',
			classes: ['backfaceVisibility'],
			properties: {
				padding: '10px',
				color: '#000',
				backgroundColor: '#FFF',
				textAlign: 'center',
				verticalAlign: 'middle',
				borderStyle: 'solid',
				borderWidths: '5px'
			}
		});

		centerSpinModifierAndrew = new Modifier({
			origin: [ .40 , 0.5]
		});
		
		chrisLogo = new Surface({
			size: [150, 150],
			content: '<img src="http://voxa.com/wp-content/uploads/2014/03/chris.jpg" width="100%" height="100%">',
			classes: ['backfaceVisibility'],
			properties: {
				padding: '10px',
				color: '#000',
				backgroundColor: '#FFF',
				textAlign: 'center',
				verticalAlign: 'middle',
				borderStyle: 'solid',
				borderWidths: '5px',
				fontWeight: 'strong'
			}
		});

		centerSpinModifierChris = new Modifier({
			origin: [ .60 , 0.5]
		});
		
		dennisLogo = new Surface({
			size: [150, 150],
			content: '<img src="http://voxa.com/wp-content/uploads/2014/03/dennis.jpg" width="100%" height="100%">',
			classes: ['backfaceVisibility'],
			properties: {
				padding: '10px',
				color: '#000',
				backgroundColor: '#FFF',
				textAlign: 'center',
				verticalAlign: 'middle',
				borderStyle: 'solid',
				borderWidths: '5px'
			}
		});

		centerSpinModifierDennis = new Modifier({
			origin: [ .80 , 0.5]
		});
		
		mainContext.add(centerSpinModifierJohnson).add(johnsonLogo);
		mainContext.add(centerSpinModifierAndrew).add(andrewLogo);
		mainContext.add(centerSpinModifierChris).add(chrisLogo);
		mainContext.add(centerSpinModifierDennis).add(dennisLogo);
		
	}
});
