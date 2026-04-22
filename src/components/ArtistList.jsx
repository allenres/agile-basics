import './ArtistList.css';
import ArtistCard from './ArtistCard'

export default function ArtistList({artists}) {
    return (
        artists.map((el) => {
            <ArtistCard artist={el}/>
        })
    )
}