import './ArtistList.css';
import ArtistCard from './ArtistCard'

export default function ArtistList({artists}) {
    const artistCards = artists.map((el) => {
        return <ArtistCard artist={el} />
    })

    return (
        <div className='artist-list'>
            {artistCards}
        </div>
    )
}