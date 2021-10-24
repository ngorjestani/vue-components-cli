export default function Album(title, artist, trackCount) {
    this.title = title || 'Default Title';
    this.artist = artist || '';
    this.trackCount = trackCount;
}