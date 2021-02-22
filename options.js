var courseCount = 0;

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function addCourseOffset() {
    let html = '<input id="course' + courseCount + '" placeholder="Id på fag">';
    html += '<label for="courseOffset' + courseCount + '">Vælg offset:</label>';
    html += '<select id="courseOffset' + courseCount +'" name = "courseOffset' + courseCount + '">';
    html += '<option  value="0">0</option>';
    html += '<option selected value="1">1</option>';
    html += '<option value="2">2</option>';
    html += '<option value="3">3</option>';
    html += '<option value="4">4</option>';
    html += '</select>';
    document.getElementsByTagName("body").innerHTML = html;
    courseCount++;
    console.log("addCourse ran");
}

function saveCourseOffset() {
    localStorage.courseOffsets = "";
    let courseOffsetsSave = [];
    for(i = 0; courseCount >= i; i++) {
        let courseId = document.getElementById("course"+ i.toString()).value;
        let courseOffset = document.getElementById("caurseOffset" + i.toString()).value;
        courseOffsetsSave[i] = {"courseId": courseId, "courseOffset": courseOffset};
    }
    localStorage.courseOffsets = JSON.stringify(courseOffsetsSave);
}

if (localStorage.courseOffsets) {
    var courseOffsets = JSON.parse(localStorage.courseOffsets);
    for (let course in courseOffsets) {
        let html = '<input id="course' + courseCount + '" value="' + course.courseId+'" placeholder="Id på fag">';
        html += '<label for="courseOffset'+ courseCount +'">Vælg offset:</label>';
        html += '<select id="courseOffset' + courseCount + '" name = "courseOffset'+ courseCount +'">';
        html += '<option  value="0">0</option>';
        html += '<option value="1">1</option>';
        html += '<option value="2">2</option>';
        html += '<option value="3">3</option>';
        html += '<option value="4">4</option>';
        html += '</select>';
        document.getElementsByTagName("body").innerHTML+= html;
        selectElement(("course"+courseCount), course.courseId);
        courseCount++;
    }
}
