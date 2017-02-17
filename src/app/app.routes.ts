
/*@ngInject*/
export default function routing($urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
    $locationProvider.html5Mode(false);
    /*@ngInject*/
    $urlRouterProvider.otherwise('/home');
}