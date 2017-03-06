import {KnowledgesService} from "./knowledges.service";
import {NotifyService} from "../common/services/notifyService";
import {NavigationService} from "../common/services/navigation.service"

module Knowledges{

    export class KnowledgesController{

        private submitted : boolean;    
        /*@ngInject*/
        private constructor(private knowledgesService: KnowledgesService, private notifyService: NotifyService, private navigationService: NavigationService){
            this.knowledgesService = knowledgesService;
            this.notifyService = notifyService;
        }

        create(knowledges: any, isValid){ //xq knowledges: any ??
          if (isValid) {
              this.knowledgesService.create(knowledges).then(response => {
                  console.log(response);
                  this.notifyService.success('Se ha creado correctamente la leccion');
                  this.navigationService.goToHome();
              });
          }
        }
    }

}

export = Knowledges;