export default function Movie(title, genre, runningTime) {
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.runningTime = runningTime;
}