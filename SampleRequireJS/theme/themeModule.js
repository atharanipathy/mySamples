define(function(){


	var themeModule = angular.module('themeModule',[]);

	
	themeModule.run(['$log',function($log){
		$log.info('Started themeModule');
	}]);

	
}); 	