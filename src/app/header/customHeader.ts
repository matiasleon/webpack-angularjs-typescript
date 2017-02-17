const templateUrl = require('./customHeader.html')

module CustomHeader {

    class HeaderController {

        private searchText: string

        /*@ngInject*/
        constructor() {
        }
        
        search() {
            alert(this.searchText);
        }
    }
    //component
    export let header = {
        controller: HeaderController,
        templateUrl: templateUrl,
        controllerAs: "header"
    }
}

export = CustomHeader;
