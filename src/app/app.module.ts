import * as angular from "angular";
import 'jquery';
import "angular-ui-router";
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { home } from "./home/home.module"
import { customHeader } from "./header/hx.searcher.header.module";
import { common } from "./common/common.module";

import routing from "./app.routes";

angular.module('app', ['ui.router', home, customHeader, common])
    .config(routing);

