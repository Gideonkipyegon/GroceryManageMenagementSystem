function Orders() {
    return (
        <div className="recieved" >
            <form className="form-1">
                <fieldset className="fieldset">
                <legend> Maker Order</legend>
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder="ProductName" />
                <label htmlFor="">Total Price</label>
                <input type="text" placeholder="Price" />
                <label htmlFor="">Quantity</label>
                <input type="text" placeholder="Quantity" />
                <label htmlFor="">Client Name</label>
                <input type="text" placeholder="clientName" />
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="phone number" />
                <input type="submit" placeholder="submit" />
                </fieldset>
            </form>
        </div>
    )
}
export default Orders