import "./style.css"
let a = 0
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