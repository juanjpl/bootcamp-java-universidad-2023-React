

function MyfirstButton({name, click}){

    console.log(name)
    return(
        <div>
            <button onClick={click}>
                {name}
            </button>
        </div>
    )
}

export default MyfirstButton;