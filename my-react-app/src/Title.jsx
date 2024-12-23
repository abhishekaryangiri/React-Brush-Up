

function Title(){
    return(
        <h2>This is new title</h2>
    )
}

function Title2() {
    return (
        <h5>Thius is second title</h5>
    )

}

function Title3() {
    return(
        <h6>This is title 3</h6>
    )
}


function JsxCurlyBrac(){
    return(
        <h3>10 * 10 = {10*10}</h3>
        //return 10 * 10 = 100, 1stwala ischanging
    )
}



//default export
//export default Title;

//if we have multiple thing to export thenwe will write like this
export{Title, Title2, Title3, JsxCurlyBrac}
