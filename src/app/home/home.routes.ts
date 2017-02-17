import { HomeController } from './home.controller';
const templateUrl = require('ngtemplate!html!./home.html');

module Home {

    /*@ngInject*/
    export function routes($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: templateUrl,//'src/app/home/home.html',
                controller: HomeController,
                controllerAs: 'home'
            });
    }
}
export = Home;