(function($) {
    $(document).ready(function() {
        $("i.fa-ellipsis-v").on("click", function() {
            $(this).next(".settings").fadeIn(500);
            $(this).fadeOut(500);
            let icon = $(this);
            $(".settings p").on("click", function() {
                $(this).parent().fadeOut(500);
                icon.fadeIn(500);
            });
            $(document).mouseup(function(e) {
                if (icon.next(".settings").has(e.target).length === 0) {
                    icon.next(".settings").fadeOut(500);
                    icon.fadeIn(500);
                }
            });
        });
        $("i.fa.fa-th").on("click", function() {
            $(".wrap_section").addClass("active");

        });
        $("i.fa.fa-th-list").on("click", function() {
            $(".wrap_section").removeClass("active");

        });



    });
})(jQuery);