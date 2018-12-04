(function($) {
    jQuery( document ).ready(function($) {
        set_avatar();

        $("#input_1_2").change(function(){
            readURL(this);
        });

        $("#input_2_2").change(function(){
            readURL(this);
        });
    });

    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#avatar-image').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    function set_avatar(){
        if ($('#avatar-source').length){

            var source = $('#avatar-source').attr('src');

            $('#avatar-image').attr('src', source);
        }
    }

})(jQuery);

