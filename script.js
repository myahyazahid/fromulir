function validasiNama() {
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let tempat = document.getElementById("tempat").value;
    let pola = /^[a-zA-Z']+$/;
    

    if(!pola.test(nama)) {
        alert("Nama Harus Berisi huruf dan tanda petik satu (')");
    }
    else if(!pola.test(alamat)) {
        alert("alamat Harus Berisi huruf dan tanda petik satu (')");
    }
    else if(!pola.test(tempat)) {
        alert("tempat lahir Harus Berisi huruf dan tanda petik satu (')");
    }

    else
    alert("nama,alamat,tempat dan tanggal lahir valid");
}