const movies = [
    {
      "titre" : "Chat gris",
      "age":2,
  
      "imageUrl": "chat_gris.jpg"
    },
  

];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




