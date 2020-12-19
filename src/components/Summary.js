const Summary = ({ payFreq, interestY,monthlyPayment,numberOfPayments,principalMor,totalCost,years}) => {
    
    let period =()=>{
        if(payFreq==='52'){
            return <span>weekly</span>
        }else if(payFreq==='26'){
            return <span>bi-weekly (every 2 weeks)</span>
        }else{
            return <span>monthly (12x per year)</span>
        }
    }

    return (
        <div> 
            <div>
                <h1 className="text-center">Calculation Summary</h1>
                <table id="table_summary" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Amortization Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Number of Payments</td>
                            <td>{numberOfPayments}</td>
                        </tr>
                        
                        <tr>
                            <td>Mortgage Payment</td>
                            <td>{(monthlyPayment.toFixed(2)).toLocaleString()}</td>
                        </tr>
                        
                        <tr>
                            <td>Principal Payments</td>
                            <td>${principalMor}</td>
                        </tr>
            
                        <tr>
                            <td>Interest Payments</td>
                            <td>${(interestY.toFixed(2)).toLocaleString()}</td>
                        </tr>            
            
                        <tr>          
                            <td>Total Cost</td>
                            <td>${(totalCost.toFixed(2)).toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary">
                <h2>
                    Mortgage Summary
                </h2>
                <div>
                    <p>
                        &nbsp;Over the {years}-year amortization period, you will:
                    </p>
                    <ul>
                        <li>
                            have made <strong>{numberOfPayments}</strong> {period()} payments of <strong>${(monthlyPayment.toFixed(2)).toLocaleString()}</strong>.
                        </li>      
                        <li>
                            have paid <strong>${principalMor.toLocaleString()}</strong> in principal, <strong>${(interestY.toFixed(2)).toLocaleString()}</strong> in interest, for a total of <strong>${(totalCost.toFixed(2)).toLocaleString()}</strong>.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
 
export default Summary;
      