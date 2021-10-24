export default function Book(title, genre, pages) {
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.pages = pages;
}