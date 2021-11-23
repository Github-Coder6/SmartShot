
Webcam.set ({
width: 350,
height: 350,
image_format: 'png',
radius: 275,
png_quality:90

});
camera= document.getElementById("camera");
Webcam.attach('#camera');




function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="capture_image" class="beautify" src="'+data_uri+'"/>';
    });
}
function modelLoaded(){
    console.log('model Loaded');
}
console.log("ml5 version", ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hngCuILOf/model.json', modelLoaded);


function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) 
    { 
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}