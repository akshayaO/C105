Webcam.set({
    width:300,
    height:250,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("#camera");
Webcam.attach('#camera');



console.log('ml5 version', ml5.version);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

function modelLoaded(){
    console.log('Model Loaded');
}


console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uO11oTrFB/model.json', modelLoaded);


function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results){
        if(error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_Person_name").innerHTML = results[0].label;
            document.getElementById("result_Person_accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
    
    }