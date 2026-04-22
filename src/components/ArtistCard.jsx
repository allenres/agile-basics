import './ArtistCard.css';
export default function ArtistCard({artist}) {
    return (
        <div className='artist-card'>
            <h1>{artist.name}</h1>
            <p>{artist.genre}</p>
            <p>{artist.bio}</p>
        </div>
    )
}