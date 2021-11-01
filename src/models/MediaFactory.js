import Movie from "@/models/Movie";
import Podcast from "@/models/Podcast";
import Song from "@/models/Song";
import MusicVideo from "@/models/MusicVideo";

export default function MediaFactory () {
    let models = [];

    this.getItems = function (mediaItems) {
        for (let item in mediaItems) {
            switch (item.kind) {
                case 'feature-movie':
                    models.push(new Movie(item.trackName, item.primaryGenreName, item.trackTimeMillis));
                    break;
                case 'podcast-episode':
                    models.push(new Podcast(item.trackName, item.collectionName, item.artworkUrl30));
                    break;
                case 'song':
                    models.push(new Song(item.trackName, item.artistName, item.artworkUrl30));
                    break;
                case 'music-video':
                    models.push(new MusicVideo(item.trackName, item.artistName, item.artworkUrl30));
                    break;
                default:
                    break;
            }
        }

        return models;
    }
}