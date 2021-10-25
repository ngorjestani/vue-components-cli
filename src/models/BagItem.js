export default function BagItem(libraryItem, removeMethod) {
    this.libraryItem = libraryItem;

    this.checkOut = () => this.libraryItem.checkOut();

    this.remove = removeMethod || function(){};
}