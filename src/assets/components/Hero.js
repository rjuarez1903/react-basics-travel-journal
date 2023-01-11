import '../css/Hero.css'

export default function Hero(props) {
    return (
        <div className='hero d-flex align-items-center gap-3 mt-2'>
            <div>
                <img src={props.img} alt={props.parrafo} />
            </div>
            <div className='d-flex flex-column'>
                <div className='d-flex gap-3 align-items-center'>
                    <h4 className='location upper mb-0'>{props.location}</h4>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.title}</h2>
                <p className='dates'>{props.start} - {props.end}</p>
                <p className='description mb-0'>{props.description}</p>
            </div>
        </div>
    )
}