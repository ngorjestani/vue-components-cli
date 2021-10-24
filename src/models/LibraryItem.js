export default function LibraryItem(media, removeMethod) {
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'};

    media.id = Math.floor(Math.random() * 10e16);

    //Decorate existing objects with LibraryItem functionality
    media.status = STATUSES.CHECKED_IN;

    media.checkIn = function () {
        console.log('Checking in');
        console.log(this.status);
        this.status = STATUSES.CHECKED_IN;
        console.log(this.status);
    }

    media.checkOut = function () {
        console.log('Checking out');
        console.log(this.status);
        this.status = STATUSES.CHECKED_OUT;
        console.log(this.status);
    }

    media.isAvailable = function () {
        return this.status === STATUSES.CHECKED_IN;
    }

    // media.remove = function(){
    //     removeMethod(this);
    // }

    media.remove = removeMethod || function(){};

    return media;
}