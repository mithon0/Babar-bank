// console.log("get the js file");
document.getElementById('diposite-btn').addEventListener('click',function(){
    // console.log('clicked')
    const dipositeField =document.getElementById('diposite-input');
    const dipositeAmountString =dipositeField.value;
    const dipositeAmount = parseFloat(dipositeAmountString);

    // console.log(dipositeAmount);
    const dipositeElementField =document.getElementById('diposite-output');
    const dipositeTotalstring =dipositeElementField.innerText;
    const dipositeTotal = parseFloat(dipositeTotalstring);

    const currentDipositeTotal = dipositeAmount + dipositeTotal ;
    dipositeElementField.innerText = currentDipositeTotal;
    // console.log(typeof dipositeAmount);

// ballence-----------------------------------------------------------
    const ballanceElement = document.getElementById('ballance-amount');
    const ballaneTotalString = ballanceElement.innerText;
    const ballanceTotal =parseFloat(ballaneTotalString);

    const totalBllance = ballanceTotal + dipositeAmount;
    ballanceElement.innerText = totalBllance;

    dipositeField.value ='';

})
// withdraw----------------------------------------------------------------
document.getElementById('Withdraw-btn').addEventListener('click',function(){
        // console.log('get the button')
        const withdrawElement =document.getElementById('withdraw-input');
        const withdrawTotalString =withdrawElement.value;
        const withdrawTotal =parseFloat(withdrawTotalString);


        const withdrawElementField =document.getElementById('withdraw-output');
            const withdrawElementTotalString =withdrawElementField.innerText;
            const withdrawElementTotal =parseFloat(withdrawElementTotalString);

            const totalWithdraw = withdrawTotal + withdrawElementTotal;
            withdrawElementField.innerText =totalWithdraw;
            withdrawElement.value = '';

            const finalBallance =document.getElementById('ballance-amount');
            const getFinalBallaneString =finalBallance.innerText;
            const finalBallanceTotal =parseFloat(getFinalBallaneString);
            const ballanceAfterWithdraw = finalBallanceTotal - withdrawTotal;
            // set the final ballance 
            finalBallance.innerText = ballanceAfterWithdraw;

        
})