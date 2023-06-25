import { Link } from 'react-router-dom'

function Product() {
    return (
        <div className="products" >
            <div className='product-2' >
                <div div className="productsitems" >
                    <img src="./images/pears.jpg"
                        alt="pears" />
                    <p> Name: <b> Pears </b></p >
                    <p> price: <b> 300 Sh per kg </b></p >
                    <button> <Link to="/Order" > Order Now </Link></button >
                </div>
                <div className="productsitems" >
                    <img src="./images/meelon.jpg"
                        alt="melon" />
                    <p> Name: <b> Watermelon </b></p >
                    <p> price: <b> 120 Sh per Kg </b></p >
                    <button> < Link to="/Order" > Order Now </Link></button >
                </div>
                <div className="productsitems" >
                    <img src="./images/tomatoes.jpg"
                        alt="tomatoes" />
                    <p> Name: <b> Tomatoes </b></p >
                    <p> price: <b> 100 Sh per Kg </b></p >
                    <button > < Link to="/Order" > Order Now </Link></button >
                </div> 
                </div>
            <div className='product-2' >
                <div className="productsitems" >
                    <img src="./images/Strawberry.jpg" alt="strawberry" />
                    <p> Name: <b> Strawberry </b></p >
                    <p> price: <b> 50 Sh per Kg </b></p >
                    <button > <Link to="/Order" > Order Now </Link></button >
                </div>
                <div className="productsitems" >
                    <img src="./images/green-apple-with-leaves.jpg" alt="greenapple" />
                    <p> Name:<b> GreenApple </b></p >
                    <p> price:<b> 200 Sh per Kg </b></p >
                    <button> <Link to="/Order" > Order Now </Link></button >
                </div>
                <div className="productsitems">
                    <img src="./images/felios.jpg" alt="strawberry" />
                    <p> Name: <b> Felios </b></p >
                    <p> price: <b> 150 Sh per Kg </b></p >
                    <button> <Link to="/Order"> Order Now </Link></button >
                </div>
            </div>
        </div>
    )
}
export default Product