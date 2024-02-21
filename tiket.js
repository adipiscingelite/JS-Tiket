const nama = prompt('Masukkan nama: ')
const umur = prompt('Masukkan umur: ')

console.log(nama)
console.log(umur)

if (umur >= 13){
  let studio = prompt('Pilih studio: (A, B, atau C)').toUpperCase()
  
  if(studio == 'A'){
    alert(`Halo ${nama}, Kamu memilih studio A`)
  }else if(studio == 'B'){
    alert(`Halo ${nama}, Kamu memilih studio B`)
  }else if(studio == 'C'){
    alert(`Halo ${nama}, Kamu memilih studio C`)
  }else{
    alert('Pilihan tidak valid')
  }
}else{
  alert('Kamu tidak boleh masuk studio')
}