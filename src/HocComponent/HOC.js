

export  function RedHOC (props) {
    return(
        <div>
            <h2 style={{backgroundColor:'red' , width : 100}}><props.cmp /></h2>
        </div>
    )
}

export  function GreenHOC (props){
    return(
        <div>
            <h2 style={{backgroundColor:'green' , width : 100}}>this is green HOC<props.cmp/></h2>
        </div>
    )
}

