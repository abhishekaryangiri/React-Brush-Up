import Product from './Product.jsx';

function ProductTab(){
let options = ["fastest selling", "india's best ", "lowest price"];
// let options2 = {a:"available on emi", b:"24hr delivery", c:"visit your bearest dealer" };
        return(
            <>
                <Product 
                title="I-phone" 
                price={19090} 
                description="Hurry up limited offer" 
                features={options}  
           />
                
                <Product 
                title="Laptop" 
                price={29090} 
                description="Fastest selling: sale end today midnight" 
                features={options} 
               />

                <Product 
                title="Nexon" 
                price={1139090} 
                description=" Safest Car of the India: 5* Rating" 
                features={options}
               />
            </>
        )
}
export default ProductTab;