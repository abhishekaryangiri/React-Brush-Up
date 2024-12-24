import Product from './Product.jsx';

function ProductTab(){
let options = ["fastest selling", "india's best ", "lowest price"];
let options2 = {a:"available on emi", b:"24hr delivery", c:"visit your bearest dealer" };
        return(
            <>
                <Product 
                title="I-phone" 
                price={19090} 
                description="Hurry up limited offer" 
                feature={options}  
                feature2={options2}/>
                
                <Product 
                title="Laptop" 
                price={29090} 
                description="Fastest selling: sale end today midnight" 
                feature={options} 
                feature2={options2}/>

                <Product 
                title="Nexon" 
                price={1139090} 
                description=" Safest Car of the India: 5* Rating" 
                feature={options}
                feature2={options2}/>
            </>
        )
}
export default ProductTab;