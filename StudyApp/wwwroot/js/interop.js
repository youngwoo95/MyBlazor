function createAlert(item) {
    const allcheck = document.getElementById(item);


    if (allcheck.checked) {
        let temp = document.getElementsByName("checkbox");

        temp.forEach((checkbox) => {
            checkbox.checked = true;
            });
    }
   
        
    }


    /*
    let temp = document.getElementsByName(item);
    
    temp.forEach((checkbox) => {
        checkbox.checked = true;
    });
    */
    //alert(item);

