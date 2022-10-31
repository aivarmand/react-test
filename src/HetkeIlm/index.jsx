import './style.css'
const HetkeIlm = (props) => (
    <div className='klass'>
        <div className='pealkiri'>Hetke ilm</div>
        <div className='temp'>{props.temp}</div>
        <div className='tuul'>{props.tuul}</div>
        <div className='kirjeldus'>{props.kirjeldus}</div>
    </div>
)

export default HetkeIlm