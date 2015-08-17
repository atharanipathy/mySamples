requirejs.config({
	paths:{
		'angular':'js/angular.min',
		'jquery':'js/jquery-2.1.4',
		'angular-route':'js/angular-route',
		'coreModule':'core/coreModule',
		'themeModule':'theme/themeModule'


	},


	shim:{
		'angular':{
			deps:['jquery']
		},
		'angular-route':{
		deps:['angular']
		},
		'coreModule':{																																																																																																																																																																																																																																																																																																																													
			deps:['angular-route','themeModule']
		},
		'themeModule':{
			deps:['angular-route']
		}
	}




});

require(['coreModule'],function(){
});