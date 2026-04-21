import './Header.css';
export default function Header({labelTitle}) {
    return (
        <>
            <header className='header'>
                <h1 className='title'>{labelTitle}</h1>
            </header>
        </>
    )
}