function pld_setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function pld_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

jQuery(document).ready(function ($) {
    var ajax_flag = 0;
    $('body').on('click', '.pld-like-dislike-trigger', function () {
        if (ajax_flag == 0) {
            var restriction = $(this).data('restriction');
            var post_id = $(this).data('post-id');
            var trigger_type = $(this).data('trigger-type');
            var selector = $(this);
            var current_count = selector.closest('.pld-common-wrap').find('.pld-count-wrap').html();
            var already_liked = selector.data('already-liked');

            if (already_liked == 0) {
                $.ajax({
                    type: 'post',
                    url: pld_js_object.admin_ajax_url,
                    data: {
                        post_id: post_id,
                        action: 'pld_post_ajax_action',
                        type: trigger_type,
                        _wpnonce: pld_js_object.admin_ajax_nonce
                    },
                    beforeSend: function (xhr) {
                        ajax_flag = 1;

                    },
                    success: function (res) {
                        ajax_flag = 0;
                        res = $.parseJSON(res);
                        if (res.success) {
                            var cookie_name = 'pld_' + post_id;
                            var latest_count = res.latest_count;
                            selector.closest('.pld-common-wrap').find('.pld-count-wrap').html(latest_count);
                            if (restriction != 'no') {
                                selector.closest('.pld-like-dislike-wrap').find('a').data('already-liked', 1);
                                selector.addClass('pld-undo-trigger');
                                selector.closest('.pld-like-dislike-wrap').find('.pld-like-dislike-trigger').addClass('pld-prevent');
                            }
                        }
                    }

                });
            }
        }
    });


    $('.pld-like-dislike-wrap br,.pld-like-dislike-wrap p').remove();

    $('body').on('click', '.pld-undo-trigger', function () {
        if (ajax_flag == 0) {
            var selector = $(this);
            var post_id = $(this).data('post-id');
            var trigger_type = $(this).data('trigger-type');
            var current_count = selector.closest('.pld-common-wrap').find('.pld-count-wrap').html();
            var like_dislike_flag = 1;
            var already_liked = $(this).data('already-liked');
            var restriction_type = $(this).data('restriction');
            if (already_liked == 1) {
                $.ajax({
                    type: 'post',
                    url: pld_js_object.admin_ajax_url,
                    data: {
                        post_id: post_id,
                        action: 'pld_post_undo_ajax_action',
                        type: trigger_type,
                        _wpnonce: pld_js_object.admin_ajax_nonce
                    },
                    beforeSend: function (xhr) {
                        ajax_flag = 1;
                    },
                    success: function (res) {
                        ajax_flag = 0;
                        res = $.parseJSON(res);
                        if (res.success) {
                            var latest_count = res.latest_count;
                            selector.closest('.pld-common-wrap').find('.pld-count-wrap').html(latest_count);
                            if (restriction_type != 'no') {
                                selector.closest('.pld-like-dislike-wrap').find('.pld-like-dislike-trigger').data('already-liked', 0);
                                selector.removeClass('pld-undo-trigger');
                                selector.closest('.pld-like-dislike-wrap').find('.pld-like-dislike-trigger').removeClass('pld-prevent');
                            }
                        }
                    }

                });
            }
        }
    });


});