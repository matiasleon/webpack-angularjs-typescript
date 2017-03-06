module common {

    export class NavigationService {
        
        /*@ngInject*/
        constructor(private $state: ng.ui.IStateService, private $stateParams : ng.ui.IStateParamsService) {
            this.$state = $state;
            this.$stateParams = $stateParams;
        }

        goToHome() {
            this.$state.go('/home')
        }

        get(): string {
            return 'StateService';
        }

        isKnowledgeView(): boolean {
            return this.$state.current.name === "knowledges";
        }
    }

}
export = common;