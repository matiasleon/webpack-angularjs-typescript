import { Knowledge } from "../common/models/knowledge";
import { API_URL } from "../constants"

module Knowledges {

    export class KnowledgesService {

        /*@ngInject*/
        constructor(private $http: ng.IHttpService) {
            this.$http = $http
        }

        create(data: Knowledge): ng.IPromise<any> {
            return this.$http.post(API_URL + "Knowledges/Create", data);
        }
    }
}

export = Knowledges;