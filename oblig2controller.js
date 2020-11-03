function selectBar(id) {
    selectedId = selectedId == id ? null : id;
    show()}
function deleteBar() {
    let indexDel = parseInt(selectedId - 1);
    numbers.splice(indexDel, 1);
    show()}
    
    function changeBar() {
    if (inputValue == null || inputValue < 1 || inputValue > 10) {
    error = true;
show();
    return;}
    let indexChange = parseInt(selectedId) - 1;
    numbers.splice(indexChange, 1, parseInt(inputValue));
    error = null
    inputValue = null;
    show()}
    
    function addBar() {
    if (inputValue == null || inputValue < 1 || inputValue > 10) {
    error = true;
show();
    return;
    } 
    numbers.push(parseInt(inputValue));
    error = null
    inputValue = null;
    show()}

    function reset() {
    numbers = [7, 3, 1, 5, 8];
    inputValue = null;
    selectedId = null;
    error = null;
    show()
}