/* Created by Josep Antrony Bover on 18/04/2021 
 inspired on : https://twitter.com/ippsketch/status/1382703022875291650

 i lost practice with codepen and the onload event.. so i binded the slider events directly on the html...

  Last update : [20/05/2021]
*/

// Function to change animation duration
  function AnimationTimeChange(e) {
    slider = document.getElementById("SliderAnimationTime");
    document.body.style.setProperty("--animation-time", String(slider.value) + "s")
    document.getElementById("TextAnimationTime").innerHTML = String(slider.value) + "s";
    // Update animation duration on all the squares
    var Selector = document.querySelectorAll(".White, .Red, .Green, .Blue");
    console.log(Selector);
    Selector.forEach(ChangeAnimationDuration.bind(slider, slider.value));
 }
 
 // Sets a new animation time on this object, this is suposed to be a input range (by default is 5 seconds)
 function ChangeAnimationDuration(NewDuration) {
   this.style.setProperty("animation-duration", String(NewDuration) + "s");
 }
  
 // function to change distance in miliseconds of each RGB channel (by default is 8 milliseconds)
  function SliderDistanceChange(e) {
    slider = document.getElementById("SliderDistanceTime");
    document.body.style.setProperty("--chromatic-distance-time", String(slider.value) + "ms")
    document.getElementById("TextDistanceTime").innerHTML = String(slider.value) + "ms";    
  }