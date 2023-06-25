import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="container">
            <div >
                <h1>welcome to the home of quality and fresh products</h1>
                <p>we are dealing with quality product which satisfy our clients needs</p>
            </div>
            <div style={{ margin: '30px' }} >
                <button><Link to="/Product"> View Products</Link></button>
            </div>
            <div>
                <h2>Our Mission</h2>
                <p> our mission is to redefine excellence by crafting products that enrich the lives of our customers. <br></br>We are driven by a passion to create innovative and superior offerings that transcend expectations<br></br> and elevate experiences to new heights </p>

            </div>
            <div>
                <h2>Our Vision</h2>
                <p>our vision is to be a catalyst for transformation and inspiration in the lives of individuals<br></br> and communities worldwide. We aspire to create a future where our innovative products and<br></br> solutions revolutionize industries, ignite creativity, and empower individuals to achieve their dreams.</p>
            </div>
            <div>
                <h2>Our Goals</h2>
                <ol>
                    <li>Improve the shopping experience</li>
                    <li>Offer competitive pricing.</li>
                    <li>Expand product variety.</li>
                    <li>Provide excellent customer service.</li>
                    <li>Implement a loyalty program.</li>
                    <li>Emphasize local and sustainable products</li>
                </ol>
            </div>
        </div>

    )
}
export default Home