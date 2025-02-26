import { ClassEvent } from "../util/ClassEvent";

export class ContactsController extends ClassEvent{

    constructor(modalEl, user){

        super();

        this._user = user;
        this._modalEl = modalEl;
    }

    opne(){

        this._user.getContacts().then(contacts =>{

            contacts.forEach(contact =>{

              
            });

        });


        this._modalEl.show();

    }

    close(){

        this._modalEl.hide();

    }


}