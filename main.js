var RText = window.webkitSpeechRecognition;
var Reconhecimento = new RText();
var TeBox = document.getElementById("caixa-de-texto");

function XIS() {
    TeBox.innerHTML = "";
    Reconhecimento.start();

}
Reconhecimento.onresult = function (E) {
    var con =E.results[0][0].transcript;
    TeBox.innerHTML = con;
    if(con == "selfie"){
        Tom();
    }

  
}
function Tom() {
    var voz = window.speechSynthesis;
    frase = "Suas selfies serão tiradas em 5 15 e 30 segundos";
    var fale = new SpeechSynthesisUtterance(frase);
    voz.speak(fale);
    Webcam.attach(Camera);
    setTimeout(function () {
        foto();
        save();
    },5000);
    setTimeout(function () {
        foto2();
        save2();
    },15000);
    setTimeout(function () {
        foto3();
        save3();
    },30000);
}
Camera = document.getElementById("camera");
Webcam.set({width: 360,height: 250,image_format:"jpeg",jpeg_quality: 90});

function foto() {
    Webcam.snap(function(Id) {
    document.getElementById("foto").innerHTML = "<img id = 'selfie' src = '"+ Id + "'>";
    })
}
function save() {
    link = document.getElementById("link");
    AiAiAiAiAiaiaiai = document.getElementById("selfie").src;
    link.href = AiAiAiAiAiaiaiai;
    link.click();
    console.log(AiAiAiAiAiaiaiai);
}
function foto2() {
    Webcam.snap(function(Id) {
    document.getElementById("foto2").innerHTML = "<img id = 'selfie2' src = '"+ Id + "'>";
    })
}
function save2() {
    link = document.getElementById("link");
    AiAiAiAiAiaiaiai = document.getElementById("selfie2").src;
    link.href = AiAiAiAiAiaiaiai;
    link.click();
    console.log(AiAiAiAiAiaiaiai);
}
function foto3() {
    Webcam.snap(function(Id) {
    document.getElementById("foto3").innerHTML = "<img id = 'selfie3' src = '"+ Id + "'>";
    })
}
function save3() {
    link = document.getElementById("link");
    AiAiAiAiAiaiaiai = document.getElementById("selfie3").src;
    link.href = AiAiAiAiAiaiaiai;
    link.click();
    console.log(AiAiAiAiAiaiaiai);
}