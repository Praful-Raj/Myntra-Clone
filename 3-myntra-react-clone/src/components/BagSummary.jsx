import {useSelector} from 'react-redux'

const BagSummary=()=>{
  const bagItems=useSelector(state=> state.bag)

  const items=useSelector(store=>store.items) 
  const finalItems= items.filter (item =>{
    const itemIndex= bagItems.indexOf(item.id);
    return itemIndex>=0;
  })
  let CONVINIENCE_FEE=0;
  let totalItem =bagItems.length;
  let totalMRP=0;
  let totalDiscount=0
  let finalPayment =0
  if(finalItems.length===0)
  {
    CONVINIENCE_FEE=0;
  }
  else{
    CONVINIENCE_FEE=99;
  }

  finalItems.map(bagItems=>
  {totalMRP=totalMRP+bagItems.original_price
  totalDiscount=totalDiscount+bagItems.original_price-bagItems.current_price})
  finalPayment = totalMRP - totalDiscount + CONVINIENCE_FEE;
    

    return (
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            {bagItems.length===0?<span className="price-item-value">₹0</span>:
            <span className="price-item-value">₹{CONVINIENCE_FEE}</span>}
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    );
}

export default BagSummary;