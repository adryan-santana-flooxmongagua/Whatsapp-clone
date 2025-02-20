const firebase = require('firebase');
require('firebase/firestore');

export class Firebase{

    constructor(){

        this._config = {
            apiKey: "AIzaSyCe3V4o9RS5T-JCwNYT9d0MoPukvjvHzGE",
            authDomain: "wppclone-3946c.firebaseapp.com",
            projectId: "wppclone-3946c",
            storageBucket: "wppclone-3946c.firebasestorage.app",
            messagingSenderId: "118093865732",
            appId: "1:118093865732:web:2697144ee8bf6618a06651",
            measurementId: "G-XXD52GF9N0"
          };

        this.init();

    }

    init(){

        if(!this._initialized){

       firebase.initializeApp(this._config);

       firebase.firestore().settings({
        timestampsInSnapshots: true
       });

       this._initialized = true;

        }

    }


    static db() {

        return firebase.firestore();

      }
    
      static hd() {

        return firebase.storage();

      }


}