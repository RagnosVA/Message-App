async function send_message() {
    
    const pincode = "400708";
    var mydate = new Date();
    var curr_data = mydate.getDate() + '-' + (mydate.getMonth()+1) + '-' + mydate.getFullYear();
    var api_link = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${curr_data}`;

    var response = await fetch(api_link);
    var data = await response.json();

    var token = "1803103310:AAGD1v9oizpUGkpmmSQkg-SohxwQPiTzHq4";
    var chat_id = 1688897650;
    var message = "";
    message += curr_data + '%0A';
    for(var i = 0; i < data.sessions.length; i++){
        message += data.sessions[i].name + '%0A';
    }
    
    mydate.setDate(mydate.getDate() + 1);
    var curr_data = mydate.getDate() + '-' + (mydate.getMonth()+1) + '-' + mydate.getFullYear();
    message += curr_data + '%0A';
    var api_link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pincode + "&date=" + curr_data;
    
    response = await fetch(api_link);
    data = await response.json();
    for(var i = 0; i < data.sessions.length; i++){
        message += data.sessions[i].name + '%0A';
    }
    
    var tele_url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
    let api = new XMLHttpRequest();
    api.open('GET', tele_url, true);
    api.send();

}
