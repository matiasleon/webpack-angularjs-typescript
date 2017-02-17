import { HomeService } from "./home.service";
import { Knowledge } from "../common/models/knowledge"

module Home {

    export class HomeController {

        private knowledges: Array<Knowledge>;

        /*@ngInject*/
        constructor(private homeService: HomeService) {
            this.homeService = homeService;
            this.init();
        }

        init() {
            this.homeService.getAll().then(response => {
                console.log(response);
                this.knowledges = response.data;
            })
        }
    }
}
export = Home;