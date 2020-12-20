//// eslint-disable-next-line

import React, { Component } from 'react';
import Summary from "./Summary";

class Calculator extends Component {
    constructor(props) {
        super(props);        
        this.state = { 
            morAmt:100000,
            iR:5,
            amtPerYear:1,
            payFreq:12,
            iY:0,
            isCalculated:0,
            TmonthlyPayment:0,
            TinterestY:0,
            TtotalCost:0,
            TnumberOfPayments:0,
            TprincipalMor:0,
            Tyears:0,
            TpayFreq:0,
        }
         
        this.handleInputChange = this.handleInputChange.bind(this);    
    }

    handleValidation(){
        let mortAmt = this.state.morAmt;
        let iR=this.state.iR;
        let amtPerYear=this.state.amtPerYear;
        let formIsValid = true;

        if(!mortAmt || mortAmt<1 ||!iR || iR<=0 || iR >100 || !amtPerYear || amtPerYear <1){
            formIsValid=false;
            return formIsValid;
        }else{
            return formIsValid;
        }

    }

    onCalculation=(e)=>{
        
        e.preventDefault();
        if(this.handleValidation()){

            let monthlyRate = this.state.iR / 100 / parseInt(this.state.payFreq);
            let monthlyPayment = this.state.morAmt * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), this.state.amtPerYear * parseInt(this.state.payFreq))));
            let balance = this.state.morAmt;
            let principalMor=this.state.morAmt;    
            let numberOfPayments = this.state.amtPerYear* parseInt(this.state.payFreq);
            let totalCost = 0;   
            let interestY = 0;

            for(let y=0; y<this.state.amtPerYear; y++) {        
                for(let m=0; m<parseInt(this.state.payFreq); m++) {
                    let interestM = balance * monthlyRate;       //Interest payment For month m
                    let principalM = monthlyPayment - interestM; //Principal payment For month m
                    interestY = interestY + interestM;    
                    balance = balance - principalM;
                    totalCost = parseInt(this.state.morAmt) + interestY
                }       
            }
                 
            this.setState({
                iY:interestY,
                morAmt:principalMor,
                isCalculated:1,
                TmonthlyPayment:monthlyPayment,
                TinterestY:interestY,
                TtotalCost:totalCost,
                TnumberOfPayments:numberOfPayments,
                TprincipalMor:principalMor,
                Tyears:this.state.amtPerYear,
                TpayFreq:this.state.payFreq,
            })
        }
        else {
            alert('Invalid value!!\nMortgage Amount cannot be 0, empty or negative.\nInterest Rate should be greater than 0 and less than 100.');
        }
    
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render() { 

        let {isCalculated}=this.state;
        let summaryRender;

        if(isCalculated) {
            summaryRender=<Summary payFreq={this.state.TpayFreq} interestY={this.state.TinterestY} monthlyPayment={this.state.TmonthlyPayment} numberOfPayments={this.state.TnumberOfPayments} principalMor={this.state.TprincipalMor} totalCost={this.state.TtotalCost} years={this.state.Tyears} />
        } else {
            summaryRender=<h3>Please fill values and click on Calculate!</h3>
        }

        return ( 
            <div className="calculator">
                <form className="row" onSubmit={(e)=>{this.onCalculation(e)}}>               
                    <div className="col-md-6">
                        <section className="panel panel-primary mrgn-tp-lg">
                            <header className="panel-heading">
                                <h3 className="panel-title">
                                    Payment Plan</h3>
                            </header>
                            <div className="panel-body">                            
                                <div className="row form-group">
                                    <div className="col-md-5">                                   
                                        <label htmlFor="morAmt" className="control-label">Mortgage Amount:</label>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="input-group">
                                            <span className="input-group-addon">$</span>
                                            <input name="morAmt" onChange={this.handleInputChange} type="number" value={this.state.morAmt}/>
                                            
                                        </div>
                                    </div>
                                </div>
                                                            
                                <div className="row form-group">
                                    <div className="col-md-5">        
                                        <label htmlFor="iR">Interest Rate:</label>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <input name="iR" type="number" onChange={this.handleInputChange} value={this.state.iR} maxLength="8" id="MainContent_txtAnnualInterestRate" className="form-control full-width" allowzero="false" validationtype="Percent"/>
                                            <span className="input-group-addon">%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-5">
                                        <label htmlFor="amtPerYear" className="control-label">Amortization Period:</label>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <select name="amtPerYear" value={this.state.amtPerYear} onChange={this.handleInputChange} id="MainContent_drpListAmortizationPeriodYearly" className="form-control full-width">
                                                    <option value="0"> </option>
                                                    <option value="1">1 Year</option>
                                                    <option value="2">2 Years</option>
                                                    <option value="3">3 Years</option>
                                                    <option value="4">4 Years</option>
                                                    <option value="5">5 Years</option>
                                                    <option value="6">6 Years</option>
                                                    <option value="7">7 Years</option>
                                                    <option value="8">8 Years</option>
                                                    <option value="9">9 Years</option>
                                                    <option value="10">10 Years</option>
                                                    <option value="11">11 Years</option>
                                                    <option value="12">12 Years</option>
                                                    <option value="13">13 Years</option>
                                                    <option value="14">14 Years</option>
                                                    <option value="15">15 Years</option>
                                                    <option value="16">16 Years</option>
                                                    <option value="17">17 Years</option>
                                                    <option value="18">18 Years</option>
                                                    <option value="19">19 Years</option>
                                                    <option value="20">20 Years</option>
                                                    <option value="21">21 Years</option>
                                                    <option value="22">22 Years</option>
                                                    <option value="23">23 Years</option>
                                                    <option value="24">24 Years</option>
                                                    <option  value="25">25 Years</option>
                                                    <option value="26">26 Years</option>
                                                    <option value="27">27 Years</option>
                                                    <option value="28">28 Years</option>
                                                    <option value="29">29 Years</option>
                                                    <option value="30">30 Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                
                                <div className="row form-group">
                                    <div className="col-md-5">    
                                        <label htmlFor="payFreq" className="control-label">Payment Frequency:</label>
                                    </div>
                                    <div className="col-md-7">
                                        <select name="payFreq" value={this.state.payFreq} onChange={this.handleInputChange} id="MainContent_drpListPaymentFrequency" className="form-control">    
                                            <option value="52">Weekly</option>
                                            <option value="26">Bi-Weekly (every 2 weeks)</option>
                                            <option value="12">Monthly (12x per year)</option>
                                            
                                        </select>
                                    </div>
                                </div>
            
                            </div>
                        </section>
                    </div>
                    <input type="submit" id="calc" className="btn btn-primary" value="Calculate ..."/>
                </form>
                {summaryRender}
            </div>
        );
    }
}
 
export default Calculator;

