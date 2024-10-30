const nodoForm = document.querySelector("form");
nodoForm.addEventListener('submit', (e)=>{ 
    e.preventDefault()
    console.log("Submit")
    nodoForm.submit()
})