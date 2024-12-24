import './Product.css';
// import Title from './Title';

function Product({title, price, description}) {
    return (
        <div className="Product">
            {/* <Title /> */}
            <h3>{title}</h3>
            <p><b>Price: {price} </b></p>
            <p>Description: {description}</p>
        </div>
    );
}

export default Product;