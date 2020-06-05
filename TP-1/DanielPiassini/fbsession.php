<?php
    
   
  
    //*********************************************************************************************
    //                                     ESTABLECER URL                                         *
    //*********************************************************************************************
    //URL del sitio
    $url = "http://localhost:8080/TP-1";
    //*********************************************************************************************
    //*********************************************************************************************
 
 
    $site = $url . "/index.html";
    $fb_local_callback = $url . "/fbsession.php";
 

    $app_id = "3098091367181318";
    $app_secret = "69f567c1e40e4674dbc9e3d04ee2a338";
    $fb_dialog_url = "https://www.facebook.com/v7.0/dialog/oauth?client_id=" . $app_id . "&redirect_uri=" . $fb_local_callback . "&scope=email";
    $fb_oauth_url = "https://graph.facebook.com/v7.0/oauth/access_token?";
    

    if(count($_GET) == 0){
        $linkObj = new stdClass;
        $linkObj->fb_dialog_link = $fb_dialog_url;
        header("Content-Type: application/json; charset=UTF-8");
        echo json_encode($linkObj); 
    }else if($_GET['code'] != ''){
        $code = $_GET['code'];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $fb_oauth_url . "client_id=" . $app_id . "&redirect_uri=" . $fb_local_callback . "&client_secret=" . $app_secret . "&code=" . $code);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $resJson = curl_exec($ch);
        curl_close($ch);  
        header("Content-Type: application/json; charset=UTF-8");
        $jsonData = json_decode($resJson);
        echo $jsonData->access_token;
        header("Location: " . $site . "?access_token=" . $jsonData->access_token);
        exit(0);
    }else if($_GET['error'] != ''){
        header("Location: " . $site . "?access_denied=true");
        exit(0);
    }
   
?>