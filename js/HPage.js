/*
 HPage component
 */
function HPage(params) {
    this.totalWidth = 1364;
    this.contentWidth = 980;
    this.current = 1;
    this.size = params.size;
    this.positions = [];
//    $(document).width();
//    $(window).width();
}

HPage.prototype.start = function () {

//    for (var i=1; i<this.size; i++) {
//        this.positions.push()
//    }

//    this.positions.shift();
//    this.positions.pop();

    this.setPanes();
    this.setLeft('#mask-left', (-500 + this.marginWidth()));
    this.setLeft('#mask-right', (this.marginWidth() + this.contentWidth));
};

HPage.prototype.scrollLeft = function () {
    if (this.current == 1) {
        //If at the beginning move to end
        this.current = this.size;
    } else {
        //Just move left
        this.current--;
    }
    this.setPanes();
};

HPage.prototype.scrollRight = function () {
    if (this.current == this.size) {
        //If at the end move to beginning
        this.current = 1;
    } else {
        //Just move right
        this.current++;
    }
    this.setPanes();
};

HPage.prototype.setPanes = function () {
//    $('.pane').removeClass('current-pane');
//    $('.pane-' + this.current).addClass('current-pane');

    $('.pane').removeClass('visible-pane');
    this.setLeft('.pane', -1000);
    $('.pane-' + this.current).addClass('visible-pane');
    $('.pane-' + this.getLeft()).addClass('visible-pane');
    $('.pane-' + this.getRight()).addClass('visible-pane');

    this.setLeft('.pane-' + this.current, this.marginWidth());
    this.setLeft('.pane-' + this.getLeft(), -this.contentWidth + this.marginWidth());
    this.setLeft('.pane-' + this.getRight(), this.marginWidth() + this.contentWidth);
};

HPage.prototype.getLeft = function () {
    if (this.current == 1) {
        //If at the beginning get the last
        return this.size;
    } else {
        //Just get the previous
        return this.current - 1;
    }
};

HPage.prototype.getRight = function () {
    if (this.current == this.size) {
        //If at the end get the beginning
        return 1;
    } else {
        //Just get next
        return this.current + 1;
    }
};

HPage.prototype.marginWidth = function () {
    return (this.totalWidth - this.contentWidth) / 2;
};

HPage.prototype.setLeft = function (element, value) {
    console.log('Setting [' + element + '] left as [' + value + ']');
    $(element).attr('style', 'left: ' + value + 'px;');
};
