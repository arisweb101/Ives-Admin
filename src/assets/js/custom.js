$(document).ready(function() {

    $('body').on('click', '.print-invoice', function(e) {
        $("#modal-billing-invoice").printThis();
    });
    
    AOS.init({
        duration: 1200
    });

    $('.btn-accept-terms-and-condition').click(function(e) {
        $('#user_terms_of_service').prop('checked', true);
    });

    // DASHBOARD Available Calls and SMS Chart

    var avail_call = 78510;
    var avail_call_total = 102510;
    var avail_sms = 850770;
    var avail_sms_total = 950250;

    var call_percent = (avail_call/avail_call_total)*100;
    var sms_percent = (avail_sms/avail_sms_total)*100;

    $(".dashboard-home #avail-call-display").text(avail_call);
    $(".dashboard-home #avail-sms-display").text(avail_sms);

    $(".dashboard-home #avail-call-num").text(avail_call);
    $(".dashboard-home #total-call-num").text(avail_call_total);

    $(".dashboard-home #avail-sms-num").text(avail_sms);
    $(".dashboard-home #total-sms-num").text(avail_sms_total);

    var call_bar = $(".dashboard-home .calls .chart-bar-wrap .chart-bar");
    var sms_bar = $(".dashboard-home .sms .chart-bar-wrap .chart-bar");

    call_bar.css("width",call_percent + "%");
    sms_bar.css("width",sms_percent + "%");

    //Create Campaign Date Picker

    // var date_input=$('input[name="date"]');
    var date_input = $('#campaign-schedule');
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);

    //Create Campaign Time Picker

    $(function() {
        $('#campaign-time').datetimepicker({
            format: 'hh:mm A',
            // debug:true
        });
    });
    $('#campaign-time').keydown(function(e) {
        return false;
    });

    //Menu Toggle Script

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    //Show password

    $("#show-password").click(function() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
            $(this).find("svg").css("color", "gray");
        } else {
            x.type = "password";
            $(this).find("svg").css("color", "#dde2e8");
        }
    });
    $("#show-confirm-password").click(function() {
        var x = document.getElementById("confirm-password");
        if (x.type === "password") {
            x.type = "text";
            $(this).find("svg").css("color", "gray");
        } else {
            x.type = "password";
            $(this).find("svg").css("color", "#dde2e8");
        }
    });

    //Upload File -------------------------------------start

    $('.upload-input').change(function() {
        var file = $(this)[0].files[0].name;
        $(this).siblings('#upload-csv-dummy').find('.upload-filename').text(file);
        $(this).parent('.file-btn').css("border-style", "solid");
        $(this).next(".upload-clear").css("display", "block");
    });

    $(".upload-clear").click(function() {

        $("#modal-campaign-create .buttons input").addClass("btn-disabled");
        $("#modal-request-callerid .buttons input").addClass("btn-disabled");

        var control = $(this).prev('.upload-input');
        control.replaceWith(control.val('').clone(true));
        $(this).prev('.upload-input').siblings('.upload-filename').text('').append("Drag and drop to upload a file");
        $(this).prev('.upload-input').siblings('.upload-filename').siblings().css("display", "block");
        $(this).parent('.file-btn').css("border-style", "dashed");
        $(this).css("display", "none");

        $(".submit-documents .upload-input").each(function() {
            if ($(this).get(0).files.length === 0) {
                $(".submit-documents .send-files").addClass("btn-disabled");
            } else {
                $(".submit-documents .send-files").removeClass("btn-disabled");
                return false;
            }
        });
    });
    //Upload File -------------------------------------end

    //Validations

    // $("#form-signup").find("#email").on("blur", validateEmail);
    // $("#form-signup").find("#mobile-num").on("blur", validateMobileNum);
    // $("#form-signup").find("#password").on("blur", validatePassword);
    $("#form-signup").find("#password").on("keypress", function() {
        confirmPasswordInput.val("");
    });
    $("#form-signup").find("#confirm-password").on("keyup", validateConfirmPassword);

    $('#form-signup').submit(function(e) {
        if (!validateConfirmPassword()) {
            e.preventDefault();
        }
    });

    $('.form .btn-clear-form').click(function(e) {
        $(this).parents(".form").trigger('reset');
    });

    $('#notification-toggle').click(function(e) {
        $("#notification-popup").toggle();
    });

    $('.ivr-filter').click(function(e) {
        $(".filter-list").toggle();
    });
    $(".signup-otp .otp-input, #modal-enter-verification .verification-pin").keydown(function() {
        $(this).val("");
    });
    $(".signup-otp .otp-input, #modal-enter-verification .verification-pin").keyup(function() {

        if (this.value.length == this.maxLength) {
            var $next = $(this).next('.otp-input, #modal-enter-verification .verification-pin ');
            if ($next.length) {
                $(this).next('.otp-input, #modal-enter-verification .verification-pin').focus();
            } else $(this).blur();
        }
    });

    $("#modal-enter-verification .verification-pin").keyup(function() {
        var isValid = true;
        $("#modal-enter-verification .verification-pin").each(function() {
            var element = $(this);
            if (element.val() == "") {
                isValid = false;
                $("#modal-enter-verification .buttons .blue-btn").addClass("btn-disabled");
            }
        });
        if (isValid) {
            $("#modal-enter-verification .buttons .blue-btn").removeClass("btn-disabled");
        }
    });

    $(".submit-documents .upload-input:file").change(function() {
        $(".submit-documents .upload-input").each(function() {
            if ($(this).get(0).files.length === 0) {
                $(".submit-documents .send-files").addClass("btn-disabled");
            } else {
                $(".submit-documents .send-files").removeClass("btn-disabled");
                return false;
            }
        });
    });

    $('#caleandar').on('click', '.open-campaign-details', function() {
        $('.hover-calendar-item-details-wrap').removeClass("hide");
        $('.hover-calendar').addClass("hide");
    });

    $('#caleandar').on('click', '.hover-calendar-item-details .hover-date img.back-btn', function() {
        $('.hover-calendar-item-details-wrap').addClass("hide");
        $('.hover-calendar').removeClass("hide");
    });

    // $('#modal-select-ivr .select-ivr-item').click(function() {
    //  $("#modal-select-ivr .buttons button").removeClass("btn-disabled");
    //  $("#modal-select-ivr .buttons button").css({"pointer-events":"auto"});

    // });

    $('.select-ivr-item').click(function() {
        $("#ivr_next").removeClass("btn-disabled");
        $("#ivr_next").css({
            "pointer-events": "auto"
        });
    });

    $("#modal-campaign-create input").bind('keyup change', function() {
        var campaign_name = $("#modal-campaign-create #campaign-name");
        var campaign_schedule = $("#modal-campaign-create #campaign-schedule");
        var campaign_time = $("#modal-campaign-create #campaign-time");
        var campaign_file = $("#modal-campaign-create .upload-input");

        if ((campaign_name.val()) && (campaign_schedule.val()) && (campaign_time.val()) && (campaign_file.val())) {
            // $("#modal-campaign-create  .buttons input").addClass("blue-btn");
            // $("#modal-campaign-create  .buttons input").removeClass("gray-btn");
            $("#modal-campaign-create  .buttons input").removeClass("btn-disabled");
            $("#modal-campaign-create  .buttons input").css({
                "pointer-events": "auto"
            });
        } else {
            // $("#modal-campaign-create  .buttons input").addClass("gray-btn");
            // $("#modal-campaign-create  .buttons input").removeClass("blue-btn");
            $("#modal-campaign-create  .buttons input").addClass("btn-disabled");
            $("#modal-campaign-create  .buttons input").css({
                "pointer-events": "none"
            });
        }
    });
    $("#modal-request-callerid input").bind('keyup change', function() {
        var r1 = $("#modal-request-callerid #callerid-input-mobilenum");
        var r2 = $("#modal-request-callerid #callerid-input-file");

        if ((r1.val().length == 10) && (r2.val())) {
            $("#modal-request-callerid .buttons .blue-btn").removeClass("btn-disabled");
        } else {
            $("#modal-request-callerid .buttons .blue-btn").addClass("btn-disabled");
        }
    });
    $(".view-campaign-schedule").click(function() {
        $(".calendar-table .list").toggleClass("hide");
        $(".calendar-table .schedule").toggleClass("hide");
    });
    $(".calendar-schedule-wrap .schedule-back img").click(function() {
        $(".calendar-table .list").toggleClass("hide");
        $(".calendar-table .schedule").toggleClass("hide");
    });

    $(".profile .nav-general").click(function() {
        $(this).addClass("active");
        $(".profile .nav-security").removeClass("active");
        $(".profile .nav-plan").removeClass("active");

        $(".profile .profile-general-info").removeClass("hide");
        $(".profile .profile-security").addClass("hide");
        $(".profile .profile-plan").addClass("hide");
    });
    $(".profile .nav-security").click(function() {
        $(this).addClass("active");
        $(".profile .nav-general").removeClass("active");
        $(".profile .nav-plan").removeClass("active");

        $(".profile .profile-general-info").addClass("hide");
        $(".profile .profile-security").removeClass("hide");
        $(".profile .profile-plan").addClass("hide");
    });
    $(".profile .nav-plan").click(function() {
        $(this).addClass("active");
        $(".profile .nav-general").removeClass("active");
        $(".profile .nav-security").removeClass("active");

        $(".profile .profile-general-info").addClass("hide");
        $(".profile .profile-security").addClass("hide");
        $(".profile .profile-plan").removeClass("hide");
    });

    $("#caleandar").on('click', '.cld-number.eventday', function(e) {
        if (e.target !== this)
            return;

        $(".cld-number.eventday").not(this).find(".cld-title").css("display", "none");
        $(this).find(".cld-title").toggle();
    });


    $(".ivr-card-item .btn-actions").click(function(e) {
        $(".ivr-card-item .btn-actions").not(this).siblings(".actions").css("display", "none");
        $(this).siblings(".actions").toggle();
    });

    $('.credit.pr-chart-ctrl').each(function() {
        var credit_value = $(this).find(".pr-chart").attr("data-value");
        var credit_overall = $(this).find(".pr-chart").attr("data-overall");
        var credit_percent = credit_value / credit_overall * 100;
        $(this).find(".pr-chart").attr("data-percent", credit_percent);
    });

    $(document).mouseup(function(e) {
        var container = $("#notif-wrap1");
        var calendar_event = $("#caleandar .cld-number.eventday");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            // container.hide();
            container.find("#notification-popup").hide();
        }
    });
    $(document).mouseup(function(e) {
        var calendar_event = $("#caleandar .cld-number.eventday");

        // if the target of the click isn't the container nor a descendant of the container
        if (!calendar_event.is(e.target) && calendar_event.has(e.target).length === 0) {
            // container.hide();
            calendar_event.find(".cld-title").hide();
        }
    });
    $(document).mouseup(function(e) {
        var ivr_filter = $(".ivr-filter");

        // if the target of the click isn't the container nor a descendant of the container
        if (!ivr_filter.is(e.target) && ivr_filter.has(e.target).length === 0) {
            // container.hide();
            ivr_filter.find(".filter-list").hide();
        }
    });
    // $(document).mouseup(function(e)
    // {
    //     var ivr_card_action = $(".ivr-list .ivr-card-item .upper .btn-actions");

    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!ivr_card_action.is(e.target) && ivr_card_action.has(e.target).length === 0)
    //     {
    //         // container.hide();
    //         ivr_card_action.next(".actions").hide();
    //     }
    // });

    $(".numbers-page .caller-id-nav").click(function(e) {
        $(this).addClass("active");
        $(".numbers-page .sms-nav").removeClass("active");
        $(".numbers-page").find(".sms-tab").css("display", "none");
        $(".numbers-page").find(".caller-id-tab").css("display", "block");
    });
    $(".numbers-page .sms-nav").click(function(e) {
        $(this).addClass("active");
        $(".numbers-page .caller-id-nav").removeClass("active");
        $(".numbers-page").find(".caller-id-tab").css("display", "none");
        $(".numbers-page").find(".sms-tab").css("display", "block");
    });
    $(" .signup .form-item #mobile-num").keypress(function(key) {
        if (key.which < 48 || key.which > 57) {
            key.preventDefault();
        }
    });
    // $("#modal-campaign-create .left  #campaign-time").addClass("x");
    // $("#modal-campaign-create .left #campaign-schedule").change(function(){
    //  if(!$(this).val()){
    //      $("#modal-campaign-create .left  #campaign-time").val("");
    //       $("#modal-campaign-create .left  #campaign-time").addClass("x");
    //  }
    //  else $("#modal-campaign-create .left  #campaign-time").removeClass("x");
    // });
    // $('#statistics-donut').children('div').each(function () {
    //     alert($(this).attr('data-value')); // "this" is the current element in the loop
    // });

    var val_answered = parseInt($('#donut-answered').attr('data-value'));
    var val_missed = parseInt($('#donut-missed').attr('data-value'));
    var val_rejected = parseInt($('#donut-rejected').attr('data-value'));
    var val_unreachable = parseInt($('#donut-unreachable').attr('data-value'));

    $("#label-answered").html(val_answered);
    $("#label-missed").html(val_missed);
    $("#label-rejected").html(val_rejected);
    $("#label-unreachable").html(val_unreachable);

    var stats_total = val_answered + val_missed + val_rejected + val_unreachable;
    $(".chart-wrap .total h2").html(stats_total);

    if (stats_total <= 0) {
        $("canvas#statistics-donut").addClass("zero-stats");
    } else {
        $("canvas#statistics-donut").removeClass("zero-stats");
    }

    applyCustom2()

    $("#ivr_tree_name").keyup(function() {
        var maxChars = 30;
        if ($(this).val().length > maxChars) {
            $(this).val($(this).val().substr(0, maxChars));
        }
    });
});

// $(function(){
//     var dtToday = new Date();

//     var month = dtToday.getMonth() + 1;
//     var day = dtToday.getDate();
//     var year = dtToday.getFullYear();
//     if(month < 10)
//         month = '0' + month.toString();
//     if(day < 10)
//         day = '0' + day.toString();

//     var maxDate = year + '-' + month + '-' + day;
//     $('#campaign-schedule').attr('min', maxDate);
// });

//Validations Functions

var emailInput = $("#form-signup").find("#email");
var mobileInput = $("#form-signup").find("#mobile-num");
var passwordInput = $("#form-signup").find("#password");
var confirmPasswordInput = $("#form-signup").find("#confirm-password");

function validateEmail() {
    // alert(2);
    var emailStr = emailInput.val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (emailInput.val() != '') {
        if (emailReg.test(emailStr)) {
            emailInput.siblings(".error-msg").css("opacity", "0");
            return true;
        } else {
            emailInput.siblings(".error-msg").css("opacity", "1");
            emailInput.siblings(".error-msg.blank").css("opacity", "0");
            return false;
        }
    } else {
        emailInput.siblings(".error-msg").css("opacity", "0");
        emailInput.siblings(".error-msg.blank").css("opacity", "1");
        return false;
    }
}

function validateMobileNum() {
    // alert(1);
    if (mobileInput.val() != '') {
        if (!(mobileInput.val().length < 11)) {
            mobileInput.siblings(".error-msg").css("opacity", "0");
            return true;
        } else {
            mobileInput.siblings(".error-msg").css("opacity", "1");
            mobileInput.siblings(".error-msg.blank").css("opacity", "0");
            return false;
        }
    } else {
        mobileInput.siblings(".error-msg").css("opacity", "0");
        mobileInput.siblings(".error-msg.blank").css("opacity", "1");
        return false;
    }
}

function validatePassword() {
    if (passwordInput.val() != '') {
        if (!(passwordInput.val().length < 6)) {
            passwordInput.siblings(".error-msg").css("opacity", "0");
            return true;
        } else {
            passwordInput.siblings(".error-msg").css("opacity", "1");
            passwordInput.siblings(".error-msg.blank").css("opacity", "0");
            return false;
        }
    } else {
        passwordInput.siblings(".error-msg").css("opacity", "0");
        passwordInput.siblings(".error-msg.blank").css("opacity", "1");
        return false;
    }
}

function validateConfirmPassword() {

    if (confirmPasswordInput.val() != '') {
        if (confirmPasswordInput.val() == passwordInput.val()) {
            confirmPasswordInput.siblings(".error-msg").css("opacity", "0");
            return true;
        } else {
            confirmPasswordInput.siblings(".error-msg").css("opacity", "1");
            // confirmPasswordInput.siblings(".error-msg.blank").css("opacity","0");
            return false;
        }
    } else {
        confirmPasswordInput.siblings(".error-msg").css("opacity", "0");
        // confirmPasswordInput.siblings(".error-msg.blank").css("opacity","1");
        return false;
    }
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9\b]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Campaign Calendar ---------------------------------------------- start
// !!! COMMENT OUT THIS PART for caleandar and it is already placed in Vue
// Campaign item
var item_date = "12:00 PM - 18 March 2018";
var item_title = "Billing Campaign";
var item_status = "Failed";
var item_ivr = "Billing Campaign";
var item_variables = "Last name, middle name, first name, address, age";
var item_callerid = "09123456789";
var item_smsmasking = "IVES";
var item_voice = "Male";
var hover_item = '<div class="hover-calendar-item-details-wrap hide">\
                    <div class="hover-calendar-item-details">\
                      <div class="hover-date">\
                        <img src="assets/client/images/ic_chevright.svg" class="back-btn">' + item_date + '\
                      </div><br>\
                      <div class="hover-title">\
                        <h1>' + item_title + '</h1>\
                        <div class="status failed">' + item_status + '</div>\
                      </div>\
                      <div class="hover-details"><br>\
                          <div><div id="ic-callerid" class="ic"></div><strong>Caller ID: </strong>' + item_callerid + '</div><br>\
                          <div><div id="ic-smsmasking" class="ic"></div><strong>SMS Masking: </strong>' + item_smsmasking + '</div><br>\
                          <div><div id="ic-voice" class="ic"></div><strong>Voice: </strong>' + item_voice + '</div><br>\
                          <div><div id="ic-variables" class="ic"></div><strong>Variables: </strong><div class="item-variables">' + item_variables + '</div></div><br>\
                      </div>\
                    </div>\
                  </div>';

// Campaign Date
var campaign_date = '18 March 2010';
var campaign_status = 'failed';
var campaign_title = 'Billing Campaign';
var campaign_time = '12:00 PM'
var hover_calendar = '<div class="hover-calendar-wrap"><div class="hover-calendar">\
                    <div class="hover-calendar-date"><img src="assets/client/images/ic_calendar_white.svg">' + campaign_date + '</div>\
                    <div class="hover-calendar-item">\
                      <div class="left"><div class="' + campaign_status + '">' + campaign_status + '</div></div>\
                      <div class="center">\
                        ' + campaign_title + '\
                        <br>\
                        <span class="time">' + campaign_time + '</span>\
                      </div>\
                      <div class="right"><span class="open-campaign-details"><img src="assets/client/images/ic_chevleft.svg"></span></div>\
                    </div>\
                  </div>\
                  ' + hover_item + '\
                </div>';


$('.cld-nav').hide();

// Custom 2 - Albert
var currentDate = new Date();
function applyCustom2() {
    $(document).find('.cld-nav.cld-rwd').off('click');
    $(document).find('.cld-nav.cld-rwd').on('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        loadCalendarData(currentDate);
    });
    $(document).find('.cld-nav.cld-fwd').off('click');
    $(document).find('.cld-nav.cld-fwd').on('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        loadCalendarData(currentDate);
    });
    $('.cld-nav').show();
}

function loadCalendarData(cdate) {
    const tmp = {
        year: cdate.getFullYear(),
        month: cdate.getMonth() + 1,
    }
    console.log(tmp);
    // Rebind event
    applyCustom2();
}