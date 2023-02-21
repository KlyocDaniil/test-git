// Read file
const fs = require('fs');
const path = require('path')
const data = fs.readFileSync(
  'BD/input_data.csv',
  {encoding:'utf8', flag:'r'},
      function(err,data){
            err ? console.log(err) : console.log(data) 
  })

arr = data.toString()
arr = arr.split("\n")

function showall() {
  arr.forEach(element =>{
    console.log(element)
  })
}

function countStringAndNameFile(whatTask) {
  if (whatTask === 0){
     mail = fs.readFileSync("BD/input_data.csv").toString()
  }else {
   mail = fs.readFileSync("BD/outputs/output" + whatTask + "TASK.txt").toString()
  }
  tmp = mail.split('\n')
  console.log(tmp.length-1)

  const infoAboutFile = "BD/outputs/" +  "output" + whatTask + "TASK.txt"
  console.log(path.basename(infoAboutFile))
}

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

Task5()
function Task1 (nationality) {
    arr.forEach(element => {
            const currentCity = nationality;
            const city = element.split(",")[3];
            if (city === currentCity){
              createOutput(element,1) 
            }
        });
        countStringAndNameFile(1)
        
}

function Task2() { 
    arr.forEach(element => {
        const weight = element.split(",")[4]
        if (weight >= 110 && weight <=120){
                createOutput(element,2)
        }
})
countStringAndNameFile(2) 
}

function Task3() {
    arr.forEach(element => {
    const name = element.split(",")[1]
    if (name.includes("Darv")){
        createOutput(element,3)
    }
})
countStringAndNameFile(3)
}

function Task4() {
    arr.forEach(element => {
   const surname = element.split(",")[2]
   if (surname.length < 8){
        createOutput(element,4)
   }
})
countStringAndNameFile(4)
}

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
    countStringAndNameFile(5)
}
