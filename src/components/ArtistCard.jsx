import './ArtistCard.css';
import AlbumItem from './AlbumItem'
//test
export default function ArtistCard({artist}) {
    const albums = artist.albums.map((abl) => {
        return <AlbumItem album={abl}/>
    })

    return (
        <div className='artist-card'>
            <h1>{artist.name}</h1>
            <p>{artist.genre}</p>
            <p>{artist.bio}</p>
            {albums}
        </div>
    )
}