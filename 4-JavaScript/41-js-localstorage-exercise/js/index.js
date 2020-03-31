window.onload = function(){
    // get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let saveStudentBtn = document.querySelector('#saveStudentBtn')
    let studentNameInp = document.querySelector('#studentNameInp')

    // declare empty array to save grade OBJECTS
    let gradesArr = []
    // declare students array to save students
    let studentsArr = []
    addGradeBtn.addEventListener('click', function (e) {
        //console.log(coursesList.selectedIndex);
        //console.log(coursesList.options[coursesList.selectedIndex].value);
        let selectedCourse = coursesList.options[coursesList.selectedIndex].value
        let grade = studentGradeInp.value
        if(selectedCourse !== '' && grade.trim() !== ''){
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''
            // create grade object to push it in gradesArr
            let gradeObj = {}
            // if(selectedCourse == 'Math'){
            //     gradeObj.math = grade
            // }
            // if(selectedCourse == 'English'){
            //     gradeObj.english = grade
            // }
            // if(selectedCourse == 'computer science1'){
            //     gradeObj.computer_science1 = grade
            // }
            // if(selectedCourse == 'java'){
            //     gradeObj.java = grade
            // }
            gradeObj[selectedCourse.replace(/ /g, "_")] = grade
            gradesArr.push(gradeObj)
            console.log(gradesArr);
            
        }
      })
      saveStudentBtn.addEventListener('click', function (e) {
          
          if(studentNameInp.value.trim()){
            let studentObj = {}
            studentObj.name = studentNameInp.value
            studentObj.grades = gradesArr
            studentsArr.push(studentObj)
            localStorage.setItem('students', JSON.stringify(studentsArr))
            gradeListElement.innerHTML = ''
            studentGradeInp.value = ''
            studentNameInp.value = ''
            gradesArr = []
          }
          
        })

}

// 1 == "1"  true check only the value
// 1 === "1" falsecheck type and value

let somthing =[ {
    "name": "ahmad",
    "grades": [
        {"Math": 90},
        {"English": 80},
        {"computer_science1": 30}
    ]
},
{
    "name": "manish",
    "grades": [
        {"Math": 0},
        {"English": 0}
    ]
}

]