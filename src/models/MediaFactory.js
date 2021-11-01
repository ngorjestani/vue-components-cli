import Movie from "@/models/Movie";
import Podcast from "@/models/Podcast";
import Album from "@/models/Album";

export default function MediaFactory (mediaItems) {
    let models = [];

    for (let item in mediaItems) {
        switch (item.kind) {
            case 'feature-movie':
                models.push(new Movie(item.trackName, item.primaryGenreName, item.trackTimeMillis));
                break;
            case 'podcast-episode':
                models.push(new Podcast(item.trackName, item.collectionName, item.artworkUrl30));
                break;
            case 'album':
                models.push(new Album())
        }
    }
}