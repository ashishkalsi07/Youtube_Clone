import { VideoCard } from "./VideoCard"

const videos = [{
    channelName: "Ashish Kalsi",
    title: "Taarak Mehta ka ooltah Chashmah",
    views: "12Mn",
    timestamp: "2 days ago",
    photo: "photo.png",
    thumbnail: "tmkoc_thumbnail.jpg",
}, {
    channelName: "Sony SAB",
    title: "CID",
    views: "12Mn",
    timestamp: "5 days ago",
    photo: "cid.jpg",
    thumbnail: "photo_2.jpg",
}, {
    channelName: "Cartoon Network",
    title: "Ben 10",
    views: "125k views",
    timestamp: "86 days ago",
    photo: "ben10.jpg",
    thumbnail: "cn_tn.jpg",
}, {
    channelName: "SAB",
    title: "TMKOC",
    views: "966k views",
    timestamp: "13 days ago",
    photo: "tmkoc_1.jpg",
    thumbnail: "tmkoc_thumbnail.jpg",

}, {
    channelName: "SAB",
    title: "TMKOC",
    views: "163k views",
    timestamp: "32 days ago",
    photo: "tmkoc_2.jpg",
    thumbnail: "photo_2.jpg",

}
    , {
    channelName: "SAB",
    title: "TMKOC",
    views: "100k views",
    timestamp: "36 days ago",
    photo: "tmkoc4.jpg",
    thumbnail: "photo_2.jpg",

}
    , {
    channelName: "SAB",
    title: "TMKOC",
    views: "10k views",
    timestamp: "66 days ago",
    photo: "tmkoc3.jpg",
    thumbnail: "tmkoc_thumbnail.jpg",

}
    , {
    channelName: "Sony",
    title: "CID",
    views: "12k views",
    timestamp: "60 days ago",
    photo: "CID.jpg",
    thumbnail: "photo_2.jpg",

},
{
    channelName: "Ashish Kalsi",
    title: "Taarak Mehta ka ooltah Chashmah",
    views: "12Mn",
    timestamp: "2 days ago",
    photo: "photo.png",
    thumbnail: "tmkoc_thumbnail.jpg",
}, {
    channelName: "Sony SAB",
    title: "CID",
    views: "12Mn",
    timestamp: "5 days ago",
    photo: "cid.jpg",
    thumbnail: "photo_2.jpg",
}, {
    channelName: "Cartoon Network",
    title: "Ben 10",
    views: "125k views",
    timestamp: "86 days ago",
    photo: "ben10.jpg",
    thumbnail: "cn_tn.jpg",
}, {
    channelName: "SAB",
    title: "TMKOC",
    views: "966k views",
    timestamp: "13 days ago",
    photo: "tmkoc_1.jpg",
    thumbnail: "tmkoc_thumbnail.jpg",

}, {
    channelName: "SAB",
    title: "TMKOC",
    views: "163k views",
    timestamp: "32 days ago",
    photo: "tmkoc_2.jpg",
    thumbnail: "photo_2.jpg",

}
    , {
    channelName: "SAB",
    title: "TMKOC",
    views: "100k views",
    timestamp: "36 days ago",
    photo: "tmkoc4.jpg",
    thumbnail: "photo_2.jpg",

}
    , {
    channelName: "SAB",
    title: "TMKOC",
    views: "10k views",
    timestamp: "66 days ago",
    photo: "tmkoc3.jpg",
    thumbnail: "tmkoc_thumbnail.jpg",

}
    , {
    channelName: "Sony",
    title: "CID",
    views: "12k views",
    timestamp: "60 days ago",
    photo: "CID.jpg",
    thumbnail: "photo_2.jpg",

}
]
export const VideoGrid = () => {
    return <div className="grid pl-5 pt-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => <div> {
            <VideoCard
                channelName={video.channelName}
                title={video.title}
                views={video.views}
                timestamp={video.timestamp}
                photo={video.photo}
                thumbnail={video.thumbnail}
            />}</div>)}
    </div>
}