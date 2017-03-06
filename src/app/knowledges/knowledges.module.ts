import * as angular from "angular";
import {routes} from "./knowledges.route";

module Knowledges{
    export const knowledges = angular.module('app.knowledges', ['ui.router'])
    .config(routes)
    .name;
}