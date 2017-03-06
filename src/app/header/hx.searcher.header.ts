const templateUrl = require('./hx.searcher.header.html');
const dropdownHtmlSearch = require('./dropdown.search.html');

module HxSearcherHeader {

    export class HxSeacrcherHeaderController {
        
        private name: string;
        private dropdownUrl : string; 

        constructor(private $http: ng.IHttpService, private stateService: any) {
            this.$http = $http;
            this.stateService = stateService;
            this.dropdownUrl = dropdownHtmlSearch;
        }

        getElementsBy(text: string) {
            return this.$http.get('http://localhost:58386/api/knowledges/GetBy', { params: { text: text } }).then(response => {
                return response.data;
            });
        }

        isKnowledgeView(): boolean {
            return this.stateService.isKnowledgeView();
        }
    }
    //component
    export let header = {
        controller: HxSeacrcherHeaderController,
        templateUrl: templateUrl,
        controllerAs: "header"
    }
}

export = HxSearcherHeader;
