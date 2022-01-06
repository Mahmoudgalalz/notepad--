let scratchpad = document.querySelector("#scratchpad")

scratchpad.value = localStorage.getItem("notes")

let cancel
scratchpad.addEventListener("keyup", event => {
  if (cancel) clearTimeout(cancel)
  cancel = setTimeout(() => {
    localStorage.setItem("notes", event.target.value)
  }, 1000)
})
