import './style.css'
import YhePaevaEnnustus from "../YhePaevaEnnustus";
const IlmaEnnustus = (props) => {
    console.log(props.forecast);
    return <div className='ilmaennustus'>
        {props.forecast && props.forecast.map((ilm) => <YhePaevaEnnustus ilm={ilm} />)}
    </div>
}

export default IlmaEnnustus