// 전체 체크박스 클릭 on&off
function createAlert(item) {
    const allcheck = document.getElementById(item);
    if (allcheck.checked) {
        let temp = document.getElementsByName("checkbox");

        temp.forEach((checkbox) => {
            checkbox.checked = true;
            });
    }else{
         let temp = document.getElementsByName("checkbox");

        temp.forEach((checkbox) => {
            checkbox.checked = false;
            });
    }
}
