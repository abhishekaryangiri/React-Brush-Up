import './Product.css';

function Product({title, price, description, feature, feature2}){
    return(
        <div className='Product'>
            <h2>{title}</h2>
            <p>price: {price}</p>
            <p>{description}</p>
            <p>{feature}</p>
            <p>{feature2.b}</p>
        </div>
    )
}
export default Product;