function start(){
    with(document){
        let l1 = String(getElmentById('left_1').value);
        let l2 = String(getElmentById('left_2').value);
        let l3 = String(getElmentById('left_3').value);
        let l4 = String(getElmentById('left_4').value);
        let l5 = String(getElmentById('left_5').value);
        let l6 = String(getElmentById('left_6').value);
        let r1 = String(getElmentById('right_1').value);
        let r2 = String(getElmentById('right_2').value);
        let r3 = String(getElmentById('right_3').value);
        let r4 = String(getElmentById('right_4').value);
        let r5 = String(getElmentById('right_5').value);

        let result = 0;
        let quality;

        if(l1 == 'Yerevan'){
            getElmentById('left_1').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_1').style.backgroundColor = 'red'
        }

        if(l2 == 'Washington'){
            getElmentById('left_2').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_2').style.backgroundColor = 'red'
        }

        if(l3 == 'Ankara'){
            getElmentById('left_3').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_3').style.backgroundColor = 'red'
        }
        if(l4 == 'London'){
            getElmentById('left_4').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_4').style.backgroundColor = 'red'
        }
           
        if(l5 == 'Madrid'){
            getElmentById('left_5').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_5').style.backgroundColor = 'red'
        }
           
        if(l6 == 'Kiev'){
            getElmentById('left_6').style.backgroundColor = 'green'
        }
        else{
            getElmentById('left_6').style.backgroundColor = 'red'
        }
           
        if(r1 == 'Paris'){
            getElmentById('right_1').style.backgroundColor = 'green'
        }
        else{
            getElmentById('right_1').style.backgroundColor = 'red'
        }  

        if(r2 == 'Berlin'){
            getElmentById('right_2').style.backgroundColor = 'green'
        }
        else{
            getElmentById('right_3').style.backgroundColor = 'red'
        }
           
        if(r4 == 'Mexico'){
            getElmentById('right_4').style.backgroundColor = 'green'
        }
        else{
            getElmentById('right_4').style.backgroundColor = 'red'
        }
           
        if(r5 == ''){
            getElmentById('right_5').style.backgroundColor = 'green'
        }
        else{
            getElmentById('right_5').style.backgroundColor = 'red'
        }
    }
}