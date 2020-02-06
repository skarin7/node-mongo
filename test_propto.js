var app = function () {
    this.data = [];
    this.add = function (item) {
        return this.data.push(item);
    }

};



app.prototype.protadd = function (item) {
    this.data.push(item);
    return this.data;
};


app.prototype.protaddAll = function (item1, item2) {
    this.protadd(item1);
    this.protadd(item2);
    return this.data;
};

var o1 = new app();
o1.protadd(1);
o1.add(2);


var o2 = new app();
o2.protadd(5);
o2.protaddAll(3, 4);



console.log(o1);
console.log(o2);


