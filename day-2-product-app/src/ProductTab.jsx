import Product from "./Product.jsx";

function ProductTab(){

    return(
        <>
            <Product title ="phone" price = { 1999 } description="India's Largest Selling Phone" />
            <Product title = "laptop" price = { 9999 *2 }  description="Best laptop in market" />
            <Product title = "shoes" description="Most trending shoes"/>
        </>
    );
}
export default ProductTab;