document.getElementById('deposit_request').addEventListener('click',function(){
    const depositInput=document.getElementById('Deposit_input');
    const depositValueString=depositInput.value;
    const depositValue=parseFloat(depositValueString)
    
    console.log(typeof depositValue)

    depositInput.value=''
})