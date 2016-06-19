
		//firebase
    var trainInput = new Firebase('https://trainsnthings.firebaseio.com/');
    	//input variables
    var name = '';
    var frequency = '';
    var time = '';
    var destination = '';
    	//add train button
    $('#submitTrain').on('click', function() {
    		//user input
        name = $('#trainName').val();
        destination = $('#trainDestination').val();
        time = $('#trainTime').val();
        frequency = $('#trainFrequency').val();
        	//push to firebase
        trainInput.push({
            name: name,
            destination: destination,
            time: time,
            frequency: frequency,

        });
        	//empty input boxes after submit
        $('#trainName').val('');
        $('#trainDestination').val('');
        $('#trainTime').val('');
        $('#trainFrequency').val('');

        return false;
    });


trainInput.on("child_added", function(childSnapshot, prevChildKey){
		//new var for input
	var inputName = childSnapshot.val().name;
	var inputDestination = childSnapshot.val().destination;
	var inputFrequency = childSnapshot.val().frequency;
	var inputFirstTrain = childSnapshot.val().firstTrain;

	var differenceTimes = moment().diff(moment.unix(inputFirstTrain), "minutes");
	var trainRemainder = moment().diff(moment.unix(inputFirstTrain), "minutes") % inputFrequency;
	var trainMinutes = inputFrequency - trainRemainder;

	var trainArrival = moment().add(trainMinutes, "m").format("hh:mm A"); 
	console.log(trainMinutes);
	console.log(trainArrival);

	console.log(moment().format("hh:mm A"));
	console.log(trainArrival);
	console.log(moment().format("X"));

		//append trainInfo table
	$("#trainInfo > tbody").append("<tr><td>" + inputName + "</td><td>" + inputDestination + "</td><td>" + inputFrequency + "</td><td>" + trainArrival + "</td><td>" + trainMinutes + "</td></tr>");

});

  
