//var courseOffsets = JSON.parse(localStorage.courseOffsets);
chrome.storage.sync.get({
    courses:[]
  }, 
  function(result) {
    courseOffsets = result.courses;
  });

if (window.location.href.indexOf("https://www.moodle.aau.dk/local/planning/calendar.php") >= 0) {
    function getKursusgangNumber() {
       // try {
            var kursusgang = document.getElementsByClassName("modal-title")[0].innerHTML;
            if (kursusgang) { 
                let stringKursusgangNumber = kursusgang.slice(kursusgang.indexOf("Kursusgang")+11,kursusgang.length);
                let arrayKursusgangNumber = stringKursusgangNumber.split(" ");
                var kursusgangNumber = arrayKursusgangNumber[0];
                setTimeout(function(){
                     console.log("Setting href");
                    console.log(document.getElementsByClassName("modal-body plancal_event_view_popup_content plancal_popup_limit_content_height"));
                     if (document.getElementsByClassName("modal-body plancal_event_view_popup_content plancal_popup_limit_content_height")[0].children[1].children[0].children[2].children[0].getAttribute("href").indexOf("&kursusgang=") < 0) {
                        console.log("if statement ran");
                        var urlKursus = document.getElementsByClassName("modal-body plancal_event_view_popup_content plancal_popup_limit_content_height")[0].children[1].children[0].children[2].children[0].getAttribute("href");
                         document.getElementsByClassName("modal-body plancal_event_view_popup_content plancal_popup_limit_content_height")[0].children[1].children[0].children[2].children[0].setAttribute("href", (urlKursus + "&kursusgang=" + kursusgangNumber));    
                    }
                }, 1000);  
              
            }
      //  } catch {console.log("catch");}
    }

    const targetNode = document.getElementById("page-wrapper");
    const config = {attributes: true, childList: true, subtree: true};
    const observer = new MutationObserver(getKursusgangNumber);
    observer.observe(targetNode, config);
    //observer.disconnect;
}


if (window.location.href.indexOf("www.moodle.aau.dk/course/view.php?") >= 0) {
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
     setTimeout(function(){
        if (getParameterByName('kursusgang') != null) {
            if (courseOffsets.some(item => item.courseId == getParameterByName("id"))) {
                for (i=0; courseOffsets.length > i; i++) {
                    console.log("Ran for-loop");
                    if (courseOffsets[i].courseId == getParameterByName("id")) {
                        console.log(courseOffsets[i].courseOffset);
                        var element = document.getElementById(("section-" + (Number(getParameterByName('kursusgang')) + Number(courseOffsets[i].courseOffset) - 1 )).toString());
                        console.log(element);
                        break;
                    }
                }
                // var indexOffetsStorage = JSON.parse(localStorage.courseOffsets).findIndex(getParameterByName("id"));
                // var offset = JSON.parse(localStorage.courseOffsets)[indexOffetsStorage].value-1;
                // var element = document.getElementById(("section-" + (getParameterByName('kursusgang')+offset)));
            } else {
                var element = document.getElementById(("section-" + getParameterByName('kursusgang')));
            }
            console.log(document.getElementById(("section-" + getParameterByName('kursusgang'))));
            element.scrollIntoView();
            window.scrollBy(0, -50);
        }
    }, 1000);    




    // setTimeout(function(){
    //     if (getParameterByName('kursusgang') != null) {
    //         console.log(getParameterByName);
    //         if (localStorage.courseOffsets.indexOf(getParameterByName("id")) >= 0) {
    //             for (i=0; courseOffsets >= i; i++) {
    //                 if (courseOffsets[i].courseId == getParameterByName("id")) {
    //                     var element = document.getElementById(("section-" + (getParameterByName('kursusgang')+courseOffsets[i].courseOffset)));
    //                 }
    //             }
    //             // var indexOffetsStorage = JSON.parse(localStorage.courseOffsets).findIndex(getParameterByName("id"));
    //             // var offset = JSON.parse(localStorage.courseOffsets)[indexOffetsStorage].value-1;
    //             // var element = document.getElementById(("section-" + (getParameterByName('kursusgang')+offset)));
    //         } else {
    //             var element = document.getElementById(("section-" + getParameterByName('kursusgang')));
    //         }
    //         console.log(getParameterByName('kursusgang'));
    //         console.log(document.getElementById(("section-" + getParameterByName('kursusgang'))));
    //         element.scrollIntoView();
    //         window.scrollBy(0, -50);
    //     }
    // }, 1000);    
}


