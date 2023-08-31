const $secBusiness = $("#business");
const $secCertification = $("#certification");
const $secStudioChatBot = $("#studioChatBot");

const $noticeModal = $(".layerPop .noticeModal");
const $noticeChk = $noticeModal.find("#chk");
const saveChecked = JSON.parse(localStorage.getItem("checked"));



if(saveChecked){
    $("body").removeClass("popupOn");
    $noticeModal.hide();
} else {
    $("body").addClass("popupOn");
    $noticeModal.show();
}

let isCheched = false;
$noticeChk.on("change", function () {
    isCheched = $(this).prop("checked");
    localStorage.setItem("checked", isCheched);
})

$noticeModal.find(".close").on("click", function () {
    $("body").removeClass("popupOn");
    $noticeModal.hide();
});

















$secBusiness.find(".circleSlider").slick({
    arrows: false,
    fade: true,
    asNavFor: $secBusiness.find(".slider"),
    // autoplay: true,
});


$secBusiness.find(".slider").on("init", function (event ,slick) {
    const ratio =  ((slick.currentSlide+1)  /  slick.slideCount)*100;
    $secBusiness.find(".grogress").css({width : ratio + "%"});
    console.log(slick.slideCount)
});

$secBusiness.find(".slider").slick({
    arrows: false,
    variableWidth: true,
    asNavFor: $secBusiness.find(".circleSlider"),
});

$secBusiness.find(".slider").on("beforeChange", function (event ,slick, current, next) {
    const ratio =  ((next+1)  /  slick.slideCount)*100;
    $secBusiness.find(".grogress").css({ width : ratio + "%"});
});

const sudioText = ["TALK BOT","LANGUAGE","VOICE","VISON"];
$secStudioChatBot.find(".slider").slick({
    arrows: false,
    variableWidth: true,
    centerMode:true,
    centerPadding: "200px",
    dots: true,
    appendDots: $secStudioChatBot.find(".dotArea"),
    dotsClass: "customDot",
    customPaging : function (slick, index) {
        const text = sudioText[index];
        return text
    }
});

$secCertification.find(".slider").slick({
    variableWidth: true,
    arrows: true,
    prevArrow: $secCertification.find(".prevArrow"),
    nextArrow: $secCertification.find(".nextArrow")
});




function scrollEvent() {
    let scrollH = 0;
    const $header = $(".header");

    $(window).on("scroll", function () {
        let scrollH = $(this).scrollTop();

        if( scrollH > 260 ) {
            $header.addClass("on");
        } else {
            $header.removeClass("on");
        }

    });
}

scrollEvent();












