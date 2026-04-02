  var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add('active-tab')
      }

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyMm4Xjo5O7cplFykBttsnenk8yuSGxHsUHRI0JVAh-LcM8tGicUwdZ6bH4xz4ZnHie/exec'
	const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()

    msg.innerHTML = "Sending..."

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
        mode: 'no-cors'
    })
    .then(() => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
})


	