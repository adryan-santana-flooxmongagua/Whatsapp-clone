class WhatsAppController {
    constructor() {

        console.log('ok');

        this.loadElements();

    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element=>{


            this.el[FormData.getCamelCase(element.id)] = element;

        });

    }
}


