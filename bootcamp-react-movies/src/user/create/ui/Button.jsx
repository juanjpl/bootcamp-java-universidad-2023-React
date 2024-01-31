import thisStyle from './Button.module.css'

function MyfirstButton({name, click}){

    //console.log(name)
    return(
        <div>
            <button onClick={click} style={thisStyle.hideButton} >
                {name}
            </button>
        </div>
    )
}

export default MyfirstButton;