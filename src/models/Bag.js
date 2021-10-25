import BagItem from "@/models/LibraryItem";

export default function Bag () {
    let arr = [];

    arr.addItem = function (item) {
        this.push(
            new BagItem(
                item,
                ((collection) => function () {
                    collection.removeItem(this)
                })(this)
            )
        );
    }

    arr.removeItems = function () {
        this.splice(0, this.length);

        return this;
    }

    arr.checkOut = function () {
        arr.forEach((bagItem) => {
            bagItem.checkOut();
        });

        this.splice(0);
    }

    return arr;
}