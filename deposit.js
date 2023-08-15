document.getElementById('deposit_request').addEventListener('click',function(){
    const depositInput=document.getElementById('Deposit_input');
    const newDepositAmountstring=depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountstring)

    if(isNaN(newDepositAmount)){
        alert("write a valid number")
        return
    }
    if(newDepositAmount<=0){
        alert(`You can't Deposit ${newDepositAmount}`)
        return
    }  
    
    
    const depositTotalElement=document.getElementById('deposit_total');
    const privousDepositTotalstring=depositTotalElement.innerText;
    const privousDepositTotal=parseFloat(privousDepositTotalstring)
    const currenctDepositTotal=privousDepositTotal+newDepositAmount
    depositTotalElement.innerText=currenctDepositTotal


     const balanceTotalElement=document.getElementById('balance');
     const balanceTotalstrin=balanceTotalElement.innerText;
     const balanaceTotal=parseFloat(balanceTotalstrin)
      balanceTotalElement.innerText=balanaceTotal+newDepositAmount;

      console.log(newDepositAmount)
    depositInput.value=''
})