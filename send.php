<?php
date_default_timezone_set('Asia/Manila');

if(isset($_POST['message'])){
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
    


    $data['message'] = $_POST['message'];
    $data['success'] = true;
    $data['timestamp'] = date('Y-m-d h:i A');
    $pusher->trigger('my-channel', 'my-event', $data);

    echo json_encode($data);
}

