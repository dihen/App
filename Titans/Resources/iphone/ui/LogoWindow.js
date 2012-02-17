function LogoWindow() {
	var theme = require('/ui/theme'),
		ui = require('/ui/components');
	
	var self = new ui.Window({
		barColor:theme.appcRed,
		titleImage:'/images/appc_white.png',
		backgroundImage:'/images/back.png'
	});
	
	var checkinButton = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.COMPOSE
	});
	self.rightNavButton = checkinButton;
	
	checkinButton.addEventListener('click', function() {
		alert('howdy');
	});
	
	return self;
}

module.exports = LogoWindow;