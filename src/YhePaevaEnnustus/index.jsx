import './style.css'

const YhePaevaEnnustus = (props) => (
    <div className='yhepaevaennustus'>
        <div className='yp_sisu'>Lähipäev: {props.ilm.day}</div>
        <div className='yp_sisu'>{props.ilm.temperature}</div>
        <div className='yp_sisu'>{props.ilm.wind}</div>

    </div>
)
export default YhePaevaEnnustus