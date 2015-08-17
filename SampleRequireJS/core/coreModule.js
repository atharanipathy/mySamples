define( ['core/runners/logRunner'], function( logRunner ){


	var coreModule = angular.module('coreModule',['ngRoute','themeModule']);
	coreModule.run(logRunner);

	coreModule.config(['$controllerProvider',function($controllerProvider){
		coreModule.registerController = $controllerProvider.register;
	}]);

	coreModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{controller:'homeController',templateUrl:'views/home.html'})
			.when('/home',
				{
					controller:'homeController',
					templateUrl:'views/home.html',
					resolve:{
						load:['$q',function($q){
							var defered = $q.defer();

							require(['core/controller/homeController'],function(){
								defered.resolve();  
							});
							return defered.promise;

						}]
					}
				})
	}]);


	require(['core/contollerReferences'],function(references){

		require(references, function(){
				angular.bootstrap(document,['coreModule']);
		});	
	});
	

	
}); 	