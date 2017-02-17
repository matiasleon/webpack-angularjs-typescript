import * as angular from "angular";
import {header} from "./customHeader"

module CustomHeader{
    export const customHeader = angular.module('app.header',[])
    .component('customHeader',header)
    .name;
}

export = CustomHeader;