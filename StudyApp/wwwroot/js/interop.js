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


// alert 창 실행
function CustomAlert() {
    alert("alert() 실행");
}

// 글자 스타일 및 내용 변경
function TransText(item,content) {
    //document.getElementById("txtTrans").innerHTML = "내용이 변경되었습니다.";
    document.getElementById(item).innerHTML = content; // 내용 변경
    document.getElementById(item).style.color = "red"; // 글자 색 변경
    document.getElementById(item).style.fontWeight = "bold"; // 글자 진하게
}