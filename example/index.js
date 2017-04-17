$(function () {
    var activeIndex = 0;
    $('.next').on('click', function () {
        moveDirection('next', activeIndex);
        activeIndex++;
    });

    // $('.prev').on('click', function () {

    // });
});

function moveDirection(direction, activeIndex) {
    //从itemsRight中取出最前面的元素放入carousel, 同时把carousel中的元素放入itemsLeft 中.
    // direction == right-to-left
    var activeWin = $('.active-window').get(0);
    // console.log(activeWin);
    var itemsRight = $.makeArray($('.item-right'));
    console.log(itemsRight);
    var itemsLeft = $.makeArray($('.item-left'));
    // console.log(itemsLeft);
    if (direction == 'next') {
        if (activeIndex >= itemsRight.length - 1) {
            activeWin.insertAdjacentElement('afterbegin',itemsLeft.pop());
            itemsRight.push(itemsLeft[activeIndex + 1]);
        } else {
            activeWin.insertAdjacentElement('afterbegin',itemsRight.shift());
            itemsLeft.push(itemsRight[activeIndex - 1]);
        }
    }

    // direction == left-to-right
}
