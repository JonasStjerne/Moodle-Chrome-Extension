var courseCount = 0;
var dataLoad;

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

document.getElementById("addCourseOffset").onclick = function() {
    let html = '<input type="number" id="course' + courseCount + '" placeholder="Id på fag">';
    html += '<label for="courseOffset' + courseCount + '">Vælg offset:</label>';
    html += '<select id="courseOffset' + courseCount +'" name = "courseOffset' + courseCount + '">';
    html += '<option  value="0">0</option>';
    html += '<option value="1">1</option>';
    html += '<option value="2">2</option>';
    html += '<option value="3">3</option>';
    html += '<option value="4">4</option>';
    html += '</select>';
    document.getElementById("container").innerHTML += html + "<br>";
    selectElement(("courseOffset"+courseCount), "1");
    courseCount++;
    console.log("addCourse ran");
  };

  document.getElementById("saveCourseOffset").onclick = function() {
    console.log("Save clicked");
    //localStorage.courseOffsets = "";
    let courseOffsetsSave = [];
    for(i = 0; courseCount > i; i++) {
        let courseId = document.getElementById("course"+ i.toString()).value;
        let courseOffset = document.getElementById("courseOffset" + i.toString()).value;
        courseOffsetsSave[i] = {"courseId": courseId, "courseOffset": courseOffset};
    }
    chrome.storage.sync.set({
    courses: courseOffsetsSave
    }, function() {
        console.log("Saved to chrome storage");
        chrome.storage.sync.get({
            courses:[]
          }, 
          function(result) {
              console.log(result.courses);
          });
    });
    //localStorage.courseOffsets = JSON.stringify(courseOffsetsSave);
  };

  chrome.storage.sync.get({
    courses:[]
  }, 
  function(result) {
      console.log(result.courses);
      for (let course in result.courses) {
        //console.log(courseOffsets[course].courseId);
        let html = '<input type="number" id="course' + courseCount + '" value="' +  result.courses[course].courseId+'" placeholder="Id på fag">';
        html += '<label for="courseOffset'+ courseCount +'">Vælg offset:</label>';
        html += '<select id="courseOffset' + courseCount + '" name = "courseOffset'+ courseCount +'">';
        html += '<option  value="0">0</option>';
        html += '<option value="1">1</option>';
        html += '<option value="2">2</option>';
        html += '<option value="3">3</option>';
        html += '<option value="4">4</option>';
        html += '</select>';
        document.getElementById("container").innerHTML += html + "<br>";
        console.log( result.courses[course].courseOffset);
        document.getElementById("courseOffset"+courseCount).children[result.courses[course].courseOffset].setAttribute("selected", "selected");
        courseCount++;
    }
  });

// if (localStorage.courseOffsets) {
//     //var courseOffsets = JSON.parse(localStorage.courseOffsets);
//     console.log(courseOffsets);
//     for (let course in courseOffsets) {
//         //console.log(courseOffsets[course].courseId);
//         let html = '<input type="number" id="course' + courseCount + '" value="' + courseOffsets[course].courseId+'" placeholder="Id på fag">';
//         html += '<label for="courseOffset'+ courseCount +'">Vælg offset:</label>';
//         html += '<select id="courseOffset' + courseCount + '" name = "courseOffset'+ courseCount +'">';
//         html += '<option  value="0">0</option>';
//         html += '<option value="1">1</option>';
//         html += '<option value="2">2</option>';
//         html += '<option value="3">3</option>';
//         html += '<option value="4">4</option>';
//         html += '</select>';
//         document.getElementById("container").innerHTML += html + "<br>";
//         console.log(courseOffsets[course].courseOffset);
//         document.getElementById("courseOffset"+courseCount).children[courseOffsets[course].courseOffset].setAttribute("selected", "selected");
//         courseCount++;
//     }
// }
