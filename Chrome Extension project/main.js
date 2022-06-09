let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const deleteBtn = document.getElementById("btn-del")
const tabBtn = document.getElementById("tabBtn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(lead) {
    let listItems = ""
    for (let i = 0; i < lead.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${lead[i]}'>
                    ${lead[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

deleteBtn.addEventListener("dblclick", function(){
     myLeads = []
     localStorage.clear()
     render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})




tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
   
})


// function add( a, b){
//   return a + b
// }
// console.log(add(3, 4))

// function getFirst(arr){
//     return arr[0]
// }
// console.log(getFirst([3, 0, 2, 3]))