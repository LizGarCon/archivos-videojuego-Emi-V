
function gameOver(){
  swal(
    {
      title: `¡Fin del juego!`,
      text: "¡Gracias por jugar!",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/002/739/226/non_2x/surfing-cute-shark-with-open-mouth-cartoon-vector.jpg",
      imageSize: "150x150",
      confirmButtonText: "Jugar de nuevo"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}



