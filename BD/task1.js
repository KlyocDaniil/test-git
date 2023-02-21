
// Read file
const fs = require('fs');

const data = fs.readFileSync(
  'BD/input_data.csv',
  {encoding:'utf8', flag:'r'},
      function(err,data){
            err ? console.log(err) : console.log(data) // 2 rev
  })

arr = data.toString()
arr = arr.split("\n")

function showall() {
  arr.forEach(element =>{
    console.log(element)
  })
}
// showall()
// countString(0)
function countString(whatTask) {
  if (whatTask === 0){
     mail = fs.readFileSync("BD/input_data.csv").toString()
  }else {
   mail = fs.readFileSync("BD/outputs/output" + whatTask + "TASK.txt").toString()
  }
  tmp = mail.split('\n')
  // console.log(tmp[tmp.length - 1])
  console.log(tmp.length-1)
  
}
createDirectory(321)
function createDirectory(nameFolder) {
  fs.mkdir('BD/' + nameFolder, err => {
    if(err) throw err; 
    console.log('Папка успешно создана');
 });
}

function createOutput(result,whatTask) {
  file = fs.writeFileSync("BD/outputs/" +  "output" + whatTask + "TASK.txt",
  result + "\n",
{
  encoding: "utf8",
  flag: "a+",
  mode: 0o666
});
}


// Task2()
// Task1('"England"')
// All people who have nationality England
function Task1 (cityNow) {
    arr.forEach(element => {
            const currentCity = cityNow;
            const city = element.split(",")[3];
            if (city === currentCity){
              createOutput(element,1) 
            }
        });
        countString(1)
}




// All people who have weight between 110 & 120
function Task2() { 
    arr.forEach(element => {
        const weight = element.split(",")[4]
        if (weight >= 110 && weight <=120){
                createOutput(element,2)
        }
})
        countString(2) 
}


// People who have name begining Darv
function Task3() {
    arr.forEach(element => {
    const name = element.split(",")[1]
    if (name.includes("Darv")){
        createOutput(element,3)
    }
})
        countString(3)
}



// TASK 4
// People who have surname less than 6 simbols
function Task4() {
    arr.forEach(element => {
   const surname = element.split(",")[2]
   if (surname.length < 8){
        createOutput(element,4)
   }
})
      countString(4)
}


// BMI all of People 
// function Task5 (){
//     arr.forEach(element => {
//     const weight = element.split(",")[4]
//     const height = element.split(",")[5]
//     const BMIheight = (height/100) * (height/100)
//     let solution = weight / BMIheight;
//     let fin = element + ',' + solution.toFixed(2)

    
//         fs.writeFileSync("BD/outputs/output5TASK.txt",
//             fin + "\n",
//           {
//             encoding: "utf8",
//             flag: "a+",
//             mode: 0o666
//           });
      
//   }
// )}

function Task5 () {
        for (let j = 0; j<arr.length; j++){
          arr[0] =  arr[0] + ',' + '"BMI"'
        const weight = arr[j].split(",")[4]
        const height = arr[j].split(",")[5]
        const BMIheight = Math.pow(height/100, 2)
        let solution = weight / BMIheight
        let resultExist = arr[j] + ',' + solution.toFixed(2)
        let resultNeverExist = arr[j] + ',' + ' ' + 'No data'
        if (!Number.isNaN(solution)){
          createOutput(resultExist,5)
        }
        else{
          createOutput(resultNeverExist,5)
        }      
    }
    countString(5)
}
