document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is


// This deletes a warning that appears if this file does not load
document.querySelector('#warning').style.display = 'none';



const circle = document.querySelectorAll('.circle')


circle.forEach(function(e) {
    e.addEventListener('click', openInfo);
});


function openInfo() {
    let where = this.dataset.name;
    const infoDiv = document.querySelector('#info')
    infoDiv.classList.add('info-styles');
    infoDiv.innerHTML = "You clicked" +where+ "."
}


// keep the line below exactly as it is
});
