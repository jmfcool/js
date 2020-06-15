// JavaScript Document


var the_object;
var http_request = new XMLHttpRequest();
http_request.open("GET", url, true);
http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            the_object = eval("(" + http_request.responseText + ")");
        } else {
            alert("There was a problem with the URL.");
        }
        http_request = null;
    }
};
http_request.send(null);


var testArray {
    "firstName": "John",
    "lastName": "Smith",
    "address": {
        "city": "New York, NY",
        "zipCode": 10021,
        "streetAddress": "21 2nd Street"
    },
    "phoneNumbers": [
        "555 555-1234",
        "444 444-4567"
    ]
};