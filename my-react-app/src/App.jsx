import "./App.css";
import {Title,Title2, Title3, JsxCurlyBrac } from "./Title.jsx";
import Description from "./Description.jsx";

function App() {

 return (
  <>
    <Title/>
    <Title2/>
    <Title3/>
    <Description/>
    <JsxCurlyBrac/>
    <h1>Hllo this is context 1</h1>
    <h2>hello content 2</h2>
    <img src="" alt="" />
  </>
 )
}


//react fragment: combine multiple element/entity in 1
//  prevent creating extra node <div>, prevent tp create extra node: instead of div, we will use <></>

export default App
