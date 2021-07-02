const pincode = "400708";

async function display(){
    var mydate = new Date();
    var curr_data = mydate.getDate() + '-' + (mydate.getMonth()+1) + '-' + mydate.getFullYear();
    var api_link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pincode + "&date=" + curr_data;
    document.getElementById("today").innerHTML = curr_data;
    fetch(api_link).then(
        res => {
            res.json().then(
                data => {
                    if (data.sessions.length > 0) {
                        var temp = "";
                        data.sessions.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.name + "</td>";
                            temp += "<td>" + itemData.vaccine + "</td>";
                            temp += "<td>" + itemData.min_age_limit + "</td>";
                            temp += "<td>" + itemData.fee_type + "</td>";
                            temp += "<td>" + itemData.address + "</td></tr>";
                        });
                        document.getElementById('myData1').innerHTML = temp;
                    } else {
                        document.getElementById('myData1').innerHTML = "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";
                    }
                }
            )
        }
    )
    mydate.setDate(mydate.getDate() + 1);
    var curr_data = mydate.getDate() + '-' + (mydate.getMonth()+1) + '-' + mydate.getFullYear();
    document.getElementById('tomorrow').innerHTML = curr_data;
    var api_link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + pincode + "&date=" + curr_data;
    fetch(api_link).then(
        res => {
            res.json().then(
                data => {
                    if (data.sessions.length > 0) {
                        var temp = "";
                        data.sessions.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.name + "</td>";
                            temp += "<td>" + itemData.vaccine + "</td>";
                            temp += "<td>" + itemData.min_age_limit + "</td>";
                            temp += "<td>" + itemData.fee_type + "</td>";
                            temp += "<td>" + itemData.address + "</td></tr>";
                        });
                        document.getElementById('myData2').innerHTML = temp;
                    } else {
                        document.getElementById('myData2').innerHTML = "<tr><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td></tr>";
                    }
                }
            )
        }
    )
}
display();
