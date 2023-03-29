function circular_progress_bar(a, b, c, d) {
    let circle = document.querySelector(a), value = document.querySelector(b);
    let startVal = c, endVal = d;
    let progess = setInterval(() => {
        startVal++;
        value.textContent = `${startVal}%`;
        circle.style.background = `conic-gradient(gold ${startVal * 3.6}deg, black 0deg)`
        if (startVal == endVal) {
            clearInterval(progess);
        }
    }, 20);
}

circular_progress_bar(".circle-hin", ".num-hin", 0, 100);
circular_progress_bar(".circle-eng", ".num-eng", 0, 80);
circular_progress_bar(".circle-mar", ".num-mar", 0, 100);


function progress_bar(a, b, c) {
    let percent = document.querySelector(a);

    let start = b, end = c;

    let progressBar = setInterval(() => {
        start++;
        percent.textContent = `${start}%`;
        if (start == end) {
            clearInterval(progressBar);
        }
    }, 20);
}
progress_bar(".percent_html", 0, 90);
progress_bar(".percent_css", 0, 60);
progress_bar(".percent_js", 0, 50);
progress_bar(".percent_bs", 0, 90);
progress_bar(".percent_react", 0, 10);

let git = document.getElementsByClassName("git");
function github() {
    window.open("https://github.com/Rutuja-Chaudhari-22", '_blank');
}