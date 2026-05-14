function showPage(num){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('page'+num).classList.add('active');
}

function showAlert() {
  alert("Thank you for your purchase!");
}
