//removed the boo facts and replaced the proper var


// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * catFactArray.length));
	// We display the fact from the catFactArray that is in the random position we just generated.
	$("#factText").text(catFactArray[number])
})

// This array holds all of our Grumpy Cat facts!
var catFactArray = ["Grumpy was born on April 4, 2012", "Grumpy's unique look comes from feline dwarfism and an underbite", "Grumpy has a brother named Pokey", "Her favorite Friskies food is Savory Shreds" ]

//when the text pink box is pressed// added brackets to pink
$("#textPink").on("click", function() {
	
	$("#funText").css("color", "pink")
})

//when the textOrange button presse// 
$("#textOrange").on("click", function() {
	
	$("#funText").css("color", "orange")
})

//When the textGreen button is pressed//
$("#textGreen").on("click", function() {
	
	$("#funText").css("color", "green")
})

//When the grow box is pressed.. put "click" in quotations
$("#boxGrow").on("click", function() {
	
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//When the shrink box is pressed// placed "click" in quotations again
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})