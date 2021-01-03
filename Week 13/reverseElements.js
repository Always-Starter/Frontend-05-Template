// Aim of this script is to revese nodes effectively, instead of using the complicated
// remember all nodes and traverse them method

// The mechanism behind this method is live collection and appenChild will remove node automatically


const elemenst = document.getElementById('certain-id');

function reverseChildren(element){
    let l = element.childNodes.length;

    while(l--){
        console.log(l, element.childNodes[l]);
        element.appendChild(element.childNodes[l]);
    }
}

reverseChildren(elements);



// The following method uses Range API, which is more efficient

let element = document.getElementById('a');

function reverseChildren(element) {
    let range = new Range();
    range.selectNodeContents(element);

    let fragment = range.extractContents();

    let l = fragment.childNodes.length;
    while (l--) {
        fragment.appendChild(fragment.childNodes[l]);
    }

    element.appendChild(fragment);
}

reverseChildren(element);