import { HomeController } from './home.controller';
const templateUrl = require('./home.html');

module Home {

    /*@ngInject*/
    export function routes($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: templateUrl,
                controller: HomeController,
                controllerAs: 'home'
            });
    }
}
export = Home;