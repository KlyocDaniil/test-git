
// Read file
const fs = require('fs');

const data = fs.readFileSync(('BD/input_data.csv'),
{encoding:'utf8', flag:'r'},
    function(err,data){
          if(err)
          console.log(err);
        else
          console.log(data);
    })
// File to string array
arr = data.toString()
arr = arr.split("\n")


//Function Task1(),Task2(),Task3(),Task4(),Task5(),countString(),createDirectory(),showall()
//Task1()

showall()

function showall(){
  arr.forEach(element =>{
    console.log(element)
  })
}
//Count
function countString(){
 console.log(data.split('\n').length)
}

function createDirectory(){
  fs.mkdir('BD/outputs', err => {
    if(err) throw err; // не удалось создать папку
    console.log('Папка успешно создана');
 });
}

// All people who have nationality England
function Task1 (){
    arr.forEach(element => {
            const currentCity = '"England"';
            const city = element.split(",")[3];
            if (city === currentCity){
                  // Write file
                    fs.writeFileSync("BD/outputs/output1TASK.txt",
                        element + "\n",
                      {
                        encoding: "utf8",
                        flag: "a+",
                        mode: 0o666
                      });
            }
        });
}




// All people who have weight between 110 & 120
function Task2(){ 
    arr.forEach(element => {
        const weight = element.split(",")[4]
        if (weight >= 110 && weight <=120){
            // console.log(element)
            
                fs.writeFileSync("BD/outputs/output2TASK.txt",
                    element + "\n",
                  {
                    encoding: "utf8",
                    flag: "a+",
                    mode: 0o666
                  });
              
        }
})}

// TASK 3
// People who have name begining Darv
function Task3(){
    arr.forEach(element => {
    const name = element.split(",")[1]
    if (name.includes("Darv")){
        // console.log(element)
        
            fs.writeFileSync("BD/outputs/output3TASK.txt",
                element + "\n",
              {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
              });
          
    }
})}

// TASK 4
// People who have surname less than 6 simbols
function Task4(){
    arr.forEach(element => {
   const surname = element.split(",")[2]
   if (surname.length < 8){
    // console.log(element)
    
        fs.writeFileSync("BD/outputs/output4TASK.txt",
            element + "\n",
          {
            encoding: "utf8",
            flag: "a+",
            mode: 0o666
          });
      
   }
})}


// BMI all of People 
function Task5 (){
    arr.forEach(element => {
    const weight = element.split(",")[4]
    const height = element.split(",")[5]
    const BMIheight = (height/100) * (height/100)
    let solution = weight / BMIheight;
    let fin = element + ',' + solution.toFixed(2)

    
        fs.writeFileSync("BD/outputs/output5TASK.txt",
            fin + "\n",
          {
            encoding: "utf8",
            flag: "a+",
            mode: 0o666
          });
      
  }
)}

// function Task5 (){
//     // console.log(arr[4])
//         for (let j = 0; j<arr.length; j++){
//         const weight = arr[j].split(",")[4]
//         const height = arr[j].split(",")[5]
//         const BMIheight = (height/100) * (height/100)
//         let solution = weight / BMIheight;
//         let fin = arr[j] + ',' + solution.toFixed(2)

//                 fs.writeFileSync("output2.txt",
//                     fin + "\n",
//                 {
//                     encoding: "utf8",   
//                     flag: "a+",
//                     mode: 0o666
//                 }); 
//         
//     }
// }
