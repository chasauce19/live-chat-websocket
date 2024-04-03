// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('ee268b03a8fb23b2e616', {
    cluster: 'ap1'
});

var channel = pusher.subscribe('my-channel');

channel.bind('my-event', function(data) {
    alert(JSON.stringify(data));
});