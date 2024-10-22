window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            sendPositionToServer,
            showError
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};
function sendPositionToServer(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/server", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(
        JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    );
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = `https://example.com`;
        }
    };
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("You must enable permission to access");
            break;
        case error.UNKNOWN_ERROR:
            console.log("Unknown Error");
            break;
    }
}
