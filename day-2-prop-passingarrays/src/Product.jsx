import './Product.css';

function Product({title, price, description}){
    return(
        <div className='Product'>
            <h2>{title}</h2>
            <p>price: {price}</p>
            <p>{description}</p>
        </div>
    )
}
export default Product;