const workshopText =
document.getElementById("workshopDipilih");

const workshopTersimpan =
localStorage.getItem("workshopDipilih");

if(workshopTersimpan){

    workshopText.innerHTML =
    workshopTersimpan;

}

const buttons =
document.querySelectorAll(".joinBtn");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const workshop =
        btn.dataset.workshop;

        localStorage.setItem(
            "workshopDipilih",
            workshop
        );

        workshopText.innerHTML =
        workshop;

        alert(
            "Berhasil mendaftar " +
            workshop
        );

    });

});

function logout(){

    if(confirm("Yakin ingin logout?")){

        window.location.href =
        "login.html";

    }

}