export class CameraController {
  constructor(videoEl) {
    this._videoEl = videoEl;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this._stream = stream;
        this._videoEl.srcObject = stream; // Correção aqui
        this._videoEl.play();
      })
      .catch((err) => {
        console.error("Erro ao acessar a câmera:", err);
      });
  }

  takePicture(mimeType = "image/png") {
    let canvas = document.createElement("canvas");
    canvas.width = this._videoEl.videoWidth;
    canvas.height = this._videoEl.videoHeight;

    let context = canvas.getContext("2d");
    context.drawImage(this._videoEl, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL(mimeType);
  }

  stop() {
    if (this._stream) {
      this._stream.getTracks().forEach((track) => track.stop());
    }
  }
}
