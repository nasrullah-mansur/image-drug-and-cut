function demoUpload() {

    $('#upload-demo').css({
        'opacity': 0,
        'height': '0'
    });
    $('.output-img').hide();
    $('.actions').show();
    $('#remove-img , #try-again').on('click', function () {
        $('#upload-demo').css({
            'opacity': 0,
            'height': 0
        });
        $('.output-img').hide();
        $('.actions').show();
    })
    $('#upload').on('change', function () {
        $('#upload-demo').css({
            'opacity': 1,
            'height': 'auto'
        });
        $('.output-img').hide();
        $('.actions').hide();
    });
    $('#crop-btn').on('click', function () {
        $('#upload-demo').css({
            'opacity': 0,
            'height': 0
        });
        $('.output-img').show();
        $('.actions').hide();
    });
    var $uploadCrop;

    function readFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.upload-demo').addClass('ready');
                $uploadCrop.croppie('bind', {
                    url: e.target.result
                }).then(function () {
                    // console.log('jQuery bind complete');
                });
            }
            reader.readAsDataURL(input.files[0]);
        } else {
            swal("Sorry - you're browser doesn't support the FileReader API");
        }
    }
    $uploadCrop = $('#upload-demo').croppie({
        viewport: {
            width: 200,
            height: 200,
        },
        enableExif: true,
        boundary: {
            width: 300,
            height: 300
        },
    });
    $('#upload').on('change', function () {
        readFile(this);
    });
    $('.upload-result').on('click', function (ev) {
        $uploadCrop.croppie('result', {
            type: 'canvas',
            size: 'viewport'
        }).then(function (resp) {
            document.getElementById('output').setAttribute('src', resp);
            // Set input:hidden value here;
            document.getElementById('cropped-img').setAttribute('value', resp);
        });
    });
}
demoUpload();