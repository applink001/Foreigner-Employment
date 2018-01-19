// This is a JavaScript file

var cropping_object = "main";
var main_cover_img_blob = null;
var main_cover_img_url = '';
var out_cover_img_blob = null;
var out_cover_img_url = '';
var in_cover_img_blob = null;
var in_cover_img_url = '';
            
$("#avatar-modal").on("shown.bs.modal", function() {
    stopCropping();
    startCropping();
});

$("#cropSave").on('click', function () {
    var $origin_image = $('#origin_image');
    var imageData = $origin_image.cropper('getCroppedCanvas').toDataURL('image/jpeg');
    var image_main = document.getElementById ('avatar_main');
    var image_out = document.getElementById ('avatar_out');
    var image_in = document.getElementById ('avatar_in');

    if (cropping_object == "main") {
        image_main.src = imageData;
    } else if(cropping_object == "out") {
        image_out.src = imageData;
    } else if(cropping_object == "in") {
        image_in.src = imageData;
    }
    
    $origin_image.src = '';
    $("#avatar-modal").modal('hide');
});

function startCropping () {
    var $origin_image = $('#origin_image');
    var image = $origin_image[0];
// 
    function start() {
//         var width = image.width;
//         var height = image.height;
//         var canvas = $canvas[0];
// 
//         canvas.width = width;
//         canvas.height = height;
//         canvas.getContext('2d').drawImage(
//             image,
//             0, 0, image.naturalWidth, image.naturalHeight,
//             0, 0, width, height
//         );
        var tmpRatio = 1;
        if (cropping_object == "main")
            tmpRatio = 3 / 4;
        else
            tmpRatio = 4 / 3;

        $origin_image.cropper({
            viewMode: 1,
            dragMode: 'move',
            aspectRatio: tmpRatio,
            //autoCropArea: 0.65,
            strict: false,
            restore: false,
            guides: false,
            highlight: false,
            // cropBoxMovable: false,
            cropBoxResizable: false
        });
    }

    if (image.complete) {
        start.call(image);
    } else {
        $origin_image.one('load', start);
    }
}

function stopCropping () {
    // var $canvas = $('#canvas');
    // $canvas.cropper('destroy');
    var $origin_image = $('#origin_image');
    $origin_image.cropper('destroy');
}


function snapPicture (type) {
    cropping_object = type;
    var camDirection = 0;
    if (cropping_object == "main")
        camDirection = 1;
    else 
        camDirection = 0;
    navigator.camera.getPicture (successCallback, FailCallback, {destinationType: Camera.DestinationType.DATA_URL, cameraDirection: camDirection});

    //Success Callback
    function successCallback (imageData) {
        var origin_img = document.getElementById ('origin_image');
        origin_img.src = "data:image/jpeg;base64, " + imageData;
        $("#avatar-modal").modal('show');
    }

    //Error CallBack
    function FailCallback (message) {
        //alert ('Error!!!: ' + message);
    }
}

function selectPicture (type) {
    cropping_object = type;
    navigator.camera.getPicture (successCallback, FailCallback, {destinationType: Camera.DestinationType.DATA_URL, sourceType:Camera.PictureSourceType.PHOTOLIBRARY});

    //Success Callback
    function successCallback (imageData) {
        var origin_img = document.getElementById ('origin_image');
        origin_img.src = "data:image/jpeg;base64, " + imageData;
        $("#avatar-modal").modal('show');
    }

    //Error CallBack
    function FailCallback (message) {
        //alert ('Error!!!: ' + message);
    }
}