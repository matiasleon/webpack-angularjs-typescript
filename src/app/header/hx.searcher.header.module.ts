import * as angular from "angular";
import { header } from "./hx.searcher.header"

module HxSearcherHeader {
    export const customHeader = angular.module('app.header', [])
        .component('hxSearcherHeader', header)
        .name;
}

export = HxSearcherHeader;