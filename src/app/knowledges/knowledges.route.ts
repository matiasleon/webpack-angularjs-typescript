import { KnowledgesController } from "./knowledges.controller";
const templateUrl = require('./knowledges.html');

module Knowledges {

    /*@ngInject*/
    export function routes($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: templateUrl,
                controller: KnowledgesController,
                controllerAs: 'knowledges'
            });
    }
}

export = Knowledges;