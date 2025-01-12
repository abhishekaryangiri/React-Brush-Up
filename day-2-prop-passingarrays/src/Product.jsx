import './Product.css';

function Product({title, price, description, features}){
    // const list = features.map((feature) => <li>{feature}</li>)
    return(
        <div className='Product'>
            <h2>{title}</h2>
            <p>price: {price}</p>
            <p>{description}</p>
            {/* <p>{list}</p> */}
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <p></p>
        </div>
    )
}
export default Product;