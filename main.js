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