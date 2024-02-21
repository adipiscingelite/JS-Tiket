const nama = prompt('Masukkan nama: ')
const umur = prompt('Masukkan umur: ')

console.log(nama)
console.log(umur)

if (umur >= 13){
  let studio = prompt('Pilih studio: (A, B, atau C)').toUpperCase()
  
  if(studio == 'A'){
    alert(`Kamu memilih studio A`)
  }else if(studio == 'B'){
    alert(`Kamu memilih studio B`)
  }else if(studio == 'C'){
    alert(`Kamu memilih studio C`)
  }else{
    alert('Pilihan tidak valid')
  }
}else{
  alert('Kamu tidak boleh masuk studio')
}