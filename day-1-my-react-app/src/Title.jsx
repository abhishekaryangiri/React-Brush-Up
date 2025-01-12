import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <h2>This is new title wit css</h2>
    </div>
  );
}

function Title2() {
  return (
    <div>
      <h5>Thius is second title</h5>
    </div>
  );
}

function Title3() {
    return(
        <h6>This is title 3</h6>
    )
}


function JsxCurlyBrac(){
    let name = "Abhi";
    return(
        <div>
            <h3>10 * 10 = {10*10}</h3>
            {/* return 10 * 10 = 100, 
            1stwala ischanging */}
            <h3>Hello, {name.toUpperCase()}</h3>
        </div>
    )
}




//default export
//export default Title;

//if we have multiple thing to export thenwe will write like this
export{Title, Title2, Title3, JsxCurlyBrac}
