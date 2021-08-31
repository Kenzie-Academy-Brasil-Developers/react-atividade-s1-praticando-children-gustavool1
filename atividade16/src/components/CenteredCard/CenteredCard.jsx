import "./style.css"
const CenteredCard = ({children}) =>{
    return (
        <div className='container'>
            <span>
                {children}
            </span>
        </div>
    )
}

export default CenteredCard