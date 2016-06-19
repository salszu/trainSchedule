window.onload = function() {

    var trainInput = new Firebase('https://trainsnthings.firebaseio.com/');

    var name = '';
    var frequency = '';
    var time = '';
    var destination = '';

    $('#submit').on('click', function() {
        name = $('#trainName').val();
        destination = $('#trainDestination').val();
        time = $('#trainTime').val();
        frequency = $('#trainFrequency').val();

        trainInput.push({
            name: name,
            destination: destination,
            time: time,
            frequency: frequency,

        });

        $('#trainName').val('');
        $('#trainDestination').val('');
        $('#trainTime').val('');
        $('#trainFrequency').val('');

        return false;
    });

};
trainInput.on("child_added", function(snapshot) {

  

};
