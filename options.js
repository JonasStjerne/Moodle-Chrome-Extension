//Initial varibales
var courseCount = 0; //Count of courses in storage + local

//Function to select value in select-tag
function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

//Adds new field for course offset
document.getElementById("addCourseOffset").onclick = function() {
    let html ='<label for="course' + courseCount + '">Fag ID:</label>';
    html += '<input type="number" id="course' + courseCount + '" placeholder="Id på fag">';
    html += '<label for="courseOffset' + courseCount + '">Offset:</label>';
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


//Saves all courses on save button press
document.getElementById("saveCourseOffset").onclick = function() {
    console.log("Save clicked");
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
};

//Delete course
document.getElementById("deleteCourseOffset").onclick = function() {
    let deleteCourseOffsetId = document.getElementById("deleteCourseOffsetId").value.toString();
    chrome.storage.sync.get({
        courses:[]
     }, 
    function(result) {
        let courseOffsets = result.courses;
        if (courseOffsets.some(item => item.courseId == deleteCourseOffsetId)) {
            for (i=0; courseOffsets.length > i; i++) {
                if  (courseOffsets[i].courseId == deleteCourseOffsetId) {
                    courseOffsets.splice(i, 1);
                    chrome.storage.sync.set({
                        courses: courseOffsets
                    }, function() {
                        console.log("Deleted item");
                        location.reload();
                    });
                    break;
                }
            }
        }
    });
};


//Initial load of course offsets from chrome.storage
  chrome.storage.sync.get({
    courses:[]
  }, 
  function(result) {
      console.log(result.courses);
      for (let course in result.courses) {
        //console.log(courseOffsets[course].courseId);
        let html = '<label for="course' + courseCount + '">Fag ID:</label>';
        html += '<input type="number" id="course' + courseCount + '" value="' +  result.courses[course].courseId+'" placeholder="Id på fag">';
        html += '<label for="courseOffset'+ courseCount +'">Offset:</label>';
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
  
