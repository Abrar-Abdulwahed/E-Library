
// JavaScript code
function search_book() {
    let input = document.getElementById('header_search').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('offer-text');
    for (i = 0; i < x.length; i++) { 
        let parent = x[i].parentNode.parentElement.parentElement;
        if (!x[i].innerText.toLowerCase().includes(input)) {
            parent.style.display="none";
        }
        else {
            parent.style.display="list-item";                 
        }
    }
}