import * as angular from "angular";
import { routes } from "./home.routes";
import { HomeService } from "./home.service";

module Home {
    export const home = angular.module('app.home', ['ui.router'])
        .config(routes)
        .service('homeService', HomeService)
        .name;
}

export = Home;