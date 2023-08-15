document.getElementById('withdraw_request').addEventListener('click', function(){
    const withdrawRequestinput=document.getElementById('withdraw_input');
    const withdrarValueString=withdrawRequestinput.value;
    const withdrawValue=parseFloat(withdrarValueString)

    const withdrowElement=document.getElementById('withdraw_total');
    const withdrowTotalString=withdrowElement.innerText;
    const withdrowTotalValue=parseFloat(withdrowTotalString);
    const withdrowTotalAmount=withdrowElement.innerText=withdrowTotalValue+withdrawValue;

    const totalBalanceElement=document.getElementById('balance');
    const totalBalanceString=totalBalanceElement.innerText;
    const totalBalance=parseFloat(totalBalanceString)
    totalBalanceElement.innerText=totalBalance-withdrawValue


    withdrawRequestinput.value=''

    
})