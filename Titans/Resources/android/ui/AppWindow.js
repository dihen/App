function AppWindow() {
	//load dependencies
	var _ = require('/lib/underscore'),
		theme = require('/ui/theme'),
		ui = require('/ui/components'),
		TabStripView = require('/ui/TabStripView'),
		StreamView = require('/ui/StreamView'),
		GroupsView = require('/ui/GroupsView'),
		LeadersView = require('/ui/LeadersView'),
		EventsView = require('/ui/EventsView');
	
	//create base proxy object and component wrapper
	var self = new ui.Window({
		navBarHidden:true,
		exitOnClose:true,
		backgroundImage:'/images/back.png'
	});
	
	var header = new ui.View({
		backgroundColor:theme.appcRed,
		height:44,
		top:0
	});
	self.add(header);
	
	var logo = new ui.ImageView('/images/appc_white.png', {
		left:5
	});
	header.add(logo);
	
	var checkinLabel = new ui.Label('Check In', {
		color:'#ffffff',
		right:5,
		font: {
			fontWeight:'bold'
		}
	});
	header.add(checkinLabel);
	
	var tabs = new TabStripView();
	tabs.viewProxy.top = 44;
	self.add(tabs.viewProxy);
	
	var scroller = Ti.UI.createScrollableView({
		top:100,
		left:0,
		right:0,
		bottom:0,
		views:[new StreamView(), new GroupsView(), new EventsView(), new LeadersView()],
		showPagingControl:false
	});
	self.add(scroller);
	
	scroller.addEventListener('scroll', function(e) {
		tabs.selectIndex(e.currentPage);
	});
	
	tabs.addEventListener('selected', function(e) {
		switch (e.id) {
			case 'stream':
				scroller.scrollToView(0);
				break;
			case 'groups':
				scroller.scrollToView(1);
				break;
			case 'events':
				scroller.scrollToView(2);
				break;
			default:
				scroller.scrollToView(3);
				break;
		}
	});
	
	return self;
}

module.exports = AppWindow;