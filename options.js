var courseCount = 0;
var dataLoad = false;
console.log("test");

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
    localStorage.courseOffsets = "";
    let courseOffsetsSave = [];
    for(i = 0; courseCount > i; i++) {
        let courseId = document.getElementById("course"+ i.toString()).value;
        let courseOffset = document.getElementById("courseOffset" + i.toString()).value;
        courseOffsetsSave[i] = {"courseId": courseId, "courseOffset": courseOffset};
        console.log(courseOffsetsSave[i]);
    }
    localStorage.courseOffsets = JSON.stringify(courseOffsetsSave);
  };


if (localStorage.courseOffsets && !dataLoad) {
    var courseOffsets = JSON.parse(localStorage.courseOffsets);
    console.log(courseOffsets);
    for (let course in courseOffsets) {
        console.log(courseOffsets[course].courseId);
        let html = '<input type="number" id="course' + courseCount + '" value="' + courseOffsets[course].courseId+'" placeholder="Id på fag">';
        html += '<label for="courseOffset'+ courseCount +'">Vælg offset:</label>';
        html += '<select id="courseOffset' + courseCount + '" name = "courseOffset'+ courseCount +'">';
        html += '<option  value="0">0</option>';
        html += '<option value="1">1</option>';
        html += '<option value="2">2</option>';
        html += '<option value="3">3</option>';
        html += '<option value="4">4</option>';
        html += '</select>';
        document.getElementById("container").innerHTML += html + "<br>";
        selectElement(("courseOffset"+courseCount), courseOffsets[course].courseOffset);
        courseCount++;
        dataLoad = true;
    }
}
