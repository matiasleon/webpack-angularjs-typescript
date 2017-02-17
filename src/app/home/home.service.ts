import {IHttpService} from "angular";
import {API_URL} from "../constants";

module Home {
    export class HomeService {
        /*@ngInject*/
        constructor(private $http:IHttpService){
            this.$http = $http;
        }

        getAll() : angular.IHttpPromise<any> {
            return this.$http.get(API_URL + 'GetAll');
        }
    }
}
export = Home;
