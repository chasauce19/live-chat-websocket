<?php
require __DIR__ . '/vendor/autoload.php';

$options = array(
    'cluster' => 'ap1',
    'useTLS' => true
);
$pusher = new Pusher\Pusher(
    'ee268b03a8fb23b2e616',
    '6dc8a3c1c32676ab6582',
    '1781665',
    $options
);

$data['message'] = 'hello world';
$pusher->trigger('my-channel', 'my-event', $data);
