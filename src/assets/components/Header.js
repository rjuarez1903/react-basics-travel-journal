import '../css/Header.css'
import img from '../images/logo.png'

export default function Header() {
    return (
        <div>
            <header className='header d-flex justify-content-center align-items-center'>
                <img src={img} alt="logo" />
                <h1>my travel journal.</h1>
            </header>
        </div>
    )
}