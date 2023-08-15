document.getElementById('withdraw_request').addEventListener('click', function(){
    const withdrawRequestinput=document.getElementById('withdraw_input');
    const withdrarValueString=withdrawRequestinput.value;
    const withdrawValue=parseFloat(withdrarValueString)

    withdrawRequestinput.value=''
    if(withdrawValue<=0){
        alert(`You can't transfer ${withdrawValue}`)
        return
    }  
    
    if(isNaN(withdrawValue)){
        alert("write a valid number")
        return
    }
    
    const totalBalanceElement=document.getElementById('balance');
    const totalBalanceString=totalBalanceElement.innerText;
    const totalBalance=parseFloat(totalBalanceString)
    totalBalanceElement.innerText=totalBalance-withdrawValue

    if(totalBalance<withdrawValue){
        alert(`Transaction Failed, Insufficient funds.`)
        return
    }

    const withdrowElement=document.getElementById('withdraw_total');
    const withdrowTotalString=withdrowElement.innerText;
    const withdrowTotalValue=parseFloat(withdrowTotalString);

    withdrowElement.innerText=withdrowTotalValue+withdrawValue;

    withdrawRequestinput.value=''

    
})