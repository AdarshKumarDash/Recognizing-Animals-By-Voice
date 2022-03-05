//https://teachablemachine.withgoogle.com/models/SLxcJrs3K/

function record() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SLxcJrs3K/model.json", modelready)
}

function modelready() {
    console.log("Model Is Ready!");
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (error) {
        confirm.log(error);
    } else {
        console.log(result);
        colorR = Math.floor(Math.random()*255) + 1;
        colorG = Math.floor(Math.random()*255) + 1;
        colorB = Math.floor(Math.random()*255) + 1;
        document.getElementById("accuracy").innerHTML = (result[0].confidence*100).toFixed(2) + " %";
        document.getElementById("hearing").innerHTML = result[0].label;
        document.getElementById("accuracy").style.color = "rgb("+colorR+", "+colorG+", "+colorB+")";
        document.getElementById("hearing").style.color = "rgb("+colorR+", "+colorG+", "+colorB+")";
        if (result[0].label == "Cat") {
            document.getElementById("aniimage").src = "meow.gif";
        } else if (result[0].label == "Dog") {
            document.getElementById("aniimage").src = "bark.gif";
        } else {
            document.getElementById("aniimage").src = "listen.gif";
        }
    }
}