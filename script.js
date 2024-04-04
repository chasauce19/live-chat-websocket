$(document).ready(function () {
    $("#sendchat").click(function (e) { 
        e.preventDefault();

        if( $("#chatbox").val().trim() == ""){
            return;
        }
        
        $(this).html(`<div class="spinner-border spinner-border-sm text-light" role="status"></div>`).attr('disabled', true);

        var data = {
            message: $("#chatbox").val()
        };

        $.ajax({
            type: "POST",
            url: "send.php",
            data: data,
            dataType: "JSON",
            success: function (response) {
                $("#sendchat").html(`<i class="bi bi-send-fill"></i>`).attr('disabled', false);
            }
        });
    });
});

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('ee268b03a8fb23b2e616', {
    cluster: 'ap1'
});

var channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
    console.log(data);
    var message = $(`
        <div class="owner msg">
            <div class="content">
                <div class="text bg-primary p-2">
                    ${data.message}
                </div>
            </div>
            <div class="datesent">
                <small class="text-secondary">${data.timestamp}</small>
            </div>
        </div>`
        );

    $(".messages").append(message);
});