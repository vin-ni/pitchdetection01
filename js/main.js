	// jshint ignore: start


var voice = new Wad({source : 'mic' }); // At this point, your browser will ask for permission to access your microphone.
var tuner = new Wad.Poly();
tuner.add(voice);

voice.play(); // You must give your browser permission to access your microphone before calling play().

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.

var logPitch = function(){
    console.log(tuner.pitch, tuner.noteName)
    requestAnimationFrame(logPitch)
};
logPitch();
// If you sing into your microphone, your pitch will be logged to the console in real time.

tuner.stopUpdatingPitch(); // Stop calculating the pitch if you don't need to know it anymore.
