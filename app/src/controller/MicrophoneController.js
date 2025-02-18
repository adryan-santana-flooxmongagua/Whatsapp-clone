import { S } from "pdfjs-dist";
import { ClassEvent } from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent{
    constructor(){

        super();

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {
            this._stream = stream;
           
            let audio = new Audio();

            audio.src = URL.createObjectURL(stream);

            audio.play();

            this.trigger('play', audio,);

        }).catch(err => {
            console.error(err);
        });
        

    }

    stop() {
        if (this._stream) {
            this._stream.getTracks().forEach(track => track.stop());
        }
    }

}