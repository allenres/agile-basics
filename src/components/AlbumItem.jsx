import './AlbumItem.css';
export default function AlbumItem({album}) {
    return (
        <div className='album-items'>
            <p>{album.title}</p>
            <p>{album.year}</p>
        </div>
    )
}