const express = require('express');
const path = require('path');

const app = express();

// !middleware fonksiyonu üç parametre alır//request ve respondsun arasında bulunan her şey middlwaredir
// const myLogger = (req,res,next)=>{
  // console.log("middleware log1")
  // next();//! eğer next demezsen bir kişi request yaptığında altta kodumuz çalışır ama site sürekli dönder döngüyü tamamlyamaz tamamlaması için next() methodu kullanılır
// }

// const myLogger2=(req,res,next)=>{
  // console.log("middleware log2");
  // next();
// }
// 



//! MİDDLEWARES
app.use(express.static('public'));

// !middleware çalışıtrmak
// !middleware yukarıdan aşağı sırayla çalışırlar
// app.use(myLogger);
// app.use(myLogger2)


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});


const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
