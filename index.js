$(function () {
    var $items = $('.item');
    var activeIndex = 0;
    update(activeIndex);
    $('.next').on('click', function () {
        if (activeIndex < 0) return;
        activeIndex--;
        update(activeIndex);
    });
    $('.prev').on('click', function () {
        if (activeIndex > $items.length-1) return;
        activeIndex++;
        update(activeIndex);
    });
});


function update(activeIndex) {
    var items = $('.item');
    items.each(function (index) {
        var leftValue = (activeIndex - index) * 700;
        $(this).css('left', leftValue);
    });
}
