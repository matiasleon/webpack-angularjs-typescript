
module Common {
    export class NotifyService {
        
        /*@ngInject*/
        constructor(private notifyService: any) {
            this.notifyService = notifyService
        }

        private notify(notificationType: string, message: string) {
            this.notifyService.set(message, {
                type: notificationType,
                duration: 3000
            });
        }

        success(messageContent: string) {
            this.notify('success', messageContent);
        }

        error(messageContent: string) {
            this.notify('error', messageContent);
        }

        info(messageContent: string) {
            this.notify('info', messageContent);
        }

        warn(messageContent: string) {
            this.notify('warn', messageContent);
        }
    }
}

export = Common;