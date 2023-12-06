// const fs = require("fs");
// const path = require("path");

// // Criar uma pasta
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log("ERRO", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// // Criar um arquivo, é ASSÍNCRONOs
// fs.writeFile(
//   path.join(__dirname, "teste", "teste.txt"),
//   "Hello Node",
//   (error) => {
//     if (error) {
//       return console.log("ERRO", error);
//     }
//     console.log("Arquivo criado com sucesso!");

//     // Adicionar um arquivo
//     fs.appendFile(
//       path.join(__dirname, "/teste", "teste.txt"),
//       "Hello World",
//       (error) => {
//         return console.log("ERRO", error);
//       }
//     );

//     // Ler um arquivo
//     fs.readFile(
//       path.join(__dirname, "/teste", "teste.txt"),
//       "utf-8",
//       (error, data) => {
//         if (error) {
//           return console.log("ERRO", error);
//         }

//         console.log(data);
//       }
//     );
//   }
// );
