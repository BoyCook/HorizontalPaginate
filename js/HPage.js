/*
 HPage component
 */
function HPage(params) {
    this.totalWidth = 1364;
    this.contentWidth = 980;
    this.head = 1;
    this.size = params.size;
    this.positions = [];
//    $(document).width();
//    $(window).width();
}

HPage.prototype.start = function () {
    this.initPanes();
    this.initStack();
    this.setPanes();
    this.addHTML();
};

HPage.prototype.addHTML = function () {
    $('.pane-container').after("<div class='mask' id='mask-left'></div>");
    $('.pane-container').after("<div class='mask' id='mask-right'></div>");
    $('.pane-container').after("<a href='#' onclick='hPage.scrollLeft()' class='move-left'> < LEFT</a>");
    $('.pane-container').after("<a href='#' onclick='hPage.scrollRight()' class='move-right'> RIGHT > </a>");
    this.setLeft('#mask-left', (-500 + this.marginWidth()));
    this.setLeft('#mask-right', (this.marginWidth() + this.contentWidth));
};

HPage.prototype.initStack = function () {
    var left = this.getStart();
    for (var i = 1; i < this.size + 1; i++) {
        this.positions.push(left);
        left += this.contentWidth;
    }
};

HPage.prototype.initPanes = function () {
    var i = 1;
    $('.pane').each(function () {
        $(this).addClass('pane-' + i);
        i++;
    });
};

HPage.prototype.scrollLeft = function () {
    //Cycle the positions to the right
    var value = this.positions[this.positions.length - 1];
    this.positions.pop();
    this.positions.unshift(value);
    $('.pane').removeClass('pane-cycled');
    $('.pane-' + this.getFirst()).addClass('pane-cycled');
    this.increment();
    this.setPanes();
};

HPage.prototype.scrollRight = function () {
    //Cycle the positions to the left
    var value = this.positions[0];
    this.positions.shift();
    this.positions.push(value);
    $('.pane').removeClass('pane-cycled');
    $('.pane-' + this.getLast()).addClass('pane-cycled');
    this.decrement();
    this.setPanes();
};

HPage.prototype.increment = function () {
    if (this.head == this.size) {
        //If at the end move to beginning
        this.head = 1;
    } else {
        //Just move right
        this.head++;
    }
};

HPage.prototype.decrement = function () {
    if (this.head == 1) {
        //If at the beginning move to end
        this.head = this.size;
    } else {
        //Just move left
        this.head--;
    }
};

HPage.prototype.setPanes = function () {
    //Set positions as defined in the stack
    for (var i = 0; i < this.positions.length; i++) {
        this.setLeft('.pane-' + (i + 1), this.positions[i]);
    }
};

HPage.prototype.getFirst = function () {
    return this.head;
};

HPage.prototype.getLast = function () {
    return this.getFirst() == 1 ? this.size : this.getFirst() - 1;
};

HPage.prototype.getStart = function () {
    return -this.contentWidth + this.marginWidth();
};

HPage.prototype.marginWidth = function () {
    return (this.totalWidth - this.contentWidth) / 2;
};

HPage.prototype.setLeft = function (element, value) {
    $(element).attr('style', 'left: ' + value + 'px;');
};
