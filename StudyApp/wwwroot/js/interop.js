// 전체 체크박스 클릭 on&off
function createAlert(item) {
    const allcheck = document.getElementById(item);
    if (allcheck.checked) {
        let temp = document.getElementsByName("checkbox");

        temp.forEach((checkbox) => {
            checkbox.checked = true;
            var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        });

        boxview();

        return true;
    }else{
         let temp = document.getElementsByName("checkbox");

        temp.forEach((checkbox) => {
            checkbox.checked = false;
            const edit = document.getElementById("editbox").style.display = "inline";
        });

        boxview();
        return false;
    }
}

function boxview() {
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length > 1) {
        const edit = document.getElementById("editbox").style.display = "none";
    }

    else {
        const edit = document.getElementById("editbox").style.display = "inline";
    }
}
