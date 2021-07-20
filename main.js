var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textarea").innerHTML = "";
    recognition.start();

}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML = content;
if(content=="take my selfie" ){
    console.log("takeing selfie");
speak();

}
}

camara = document.getElementById("camara");
Webcam.set({
    width: 250,
    height: 150,
    image_format: 'png',
    png_ouality: 90,

});

function speak() {
    var synth = window.speechSynthesis;
    data = "Takeing selfy in 5 second";
    var utterthis = new SpeechSynthesisUtterance(data);
    synth.speak(utterthis);
    Webcam.attach(camara);
setTimeout(function(){
takesnapshot();
save();
},5000);

}

function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfy" src="'+data_uri+'"/>';

});


}

function save(){
var a=document.getElementById("link");
var img=document.getElementById("selfy").src;
a.href=img;
a.click();

}