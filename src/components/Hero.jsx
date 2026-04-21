import './Hero.css';
export default function Hero({tagline, city, founded}) {
    return (
        <div className='hero'>
            <div>
                <h2 className='tagline'>{tagline}</h2>
                <p className='about'>We're a records label based in {city}. Founded in the year {founded}.</p>
            </div>
            <div className='img-container'>
                <img src="https://lirp.cdn-website.com/e00ccc9d/dms3rep/multi/opt/Vinyl-Records-on-Shelf-652x435-3142589a-640w.jpg" alt="" />
            </div>
        </div>
    )
}