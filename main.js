var prediction = '';
Webcam.set({
    height: 350,
    width: 350,
    image_format: 'png',
    png_quality: 100
});
console.log('ml5 version:', ml5.version);
camera = document.getElementById('camera');
Webcam.attach('#camera');
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pHlaT6jws/model.json       ', modelLoaded);

function takeSnap() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="captureImage" src="' + data_uri + '"/>';
    });
}

function modelLoaded() {
    console.log('model loaded');
}

function check(){
    img = document.getElementById('captureImage');
    classifier.classify(img , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('paraEmoji1').innerHTML = results[0].label;
        prediction = results[0].label;
        if(results[0].label == 'thumbs up'){
            document.getElementById('emoji1').innerHTML = '👍';   
        } 
        if(results[0].label == 'victory'){
          document.getElementById('emoji1').innerHTML = '✌';
        } 
        if(results[0].label == 'high five'){
            document.getElementById('emoji1').innerHTML = '🖐';
        }
    }
}