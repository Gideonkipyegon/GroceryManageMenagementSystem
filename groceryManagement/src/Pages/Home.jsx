import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className="container">
            <div >
         <h1>welcome to the home of quality and fresh products</h1>
         <p>we are dealing with quality product which satisfy our clients needs</p>
        </div>
        <div style={{padding:'10px'}} >
        <Link to="/Product"> View Product</Link> 
        </div>
        
        
       </div>
       
    )
}
export default Home