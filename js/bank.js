// console.log("get the js file");
document.getElementById('diposite-btn').addEventListener('click',function(){
    // console.log('clicked')
    const dipositeField =document.getElementById('diposite-input');
    const dipositeAmount =dipositeField.value;
    // console.log(dipositeAmount);
    const dipositeElementField =document.getElementById('diposite-output');
    const dipositeTotal =dipositeElementField.innerText;
    dipositeElementField.innerText = dipositeAmount;

    // clear stap 
    dipositeField.value ='';

})