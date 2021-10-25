export default function Bag () {
    let arr = [];

    arr.addItem = function (item) {
        this.push(item);
    }

    arr.removeItems = function () {
        this.splice(0, this.length);

        return this;
    }

    return arr;
}