export function checkPasswordMatch() {
    const password = document.getElementById("txtNewPassword").value;
    const confirmPassword = document.getElementById("txtConfirmPassword").value;
  
    if (password != confirmPassword) {
      document.getElementById("divCheckPasswordMatch").innerHTML = "Passwords do not match!";
    } else {
      document.getElementById("divCheckPasswordMatch").innerHTML = "Passwords match.";
    }
  }
  
export function strength() {
    const desc = [{'width':'0px'}, {'width':'20%'}, {'width':'40%'}, {'width':'60%'}, {'width':'80%'}, {'width':'100%'}];
    const descClass = ['', 'progress-bar-danger', 'progress-bar-danger', 'progress-bar-warning', 'progress-bar-success', 'progress-bar-success'];
    let score = 0;
    const password = document.getElementById("txtNewPassword").value;
  
    if (password.length > 6) {
      score++;
    }
  
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      score++;
    }
  
    if (password.match(/\d+/)) {
      score++;
    }
  
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
      score++;
    }
  
    if (password.length > 10) {
      score++;
    }
  
    const progressBar = document.getElementById("progress-bar");
    const prevClass = descClass[score - 1];
    const currClass = descClass[score];
    
    if (prevClass !== undefined && prevClass !== '') {
      progressBar.classList.remove(prevClass);
    }
    if (currClass !== undefined && currClass !== '') {
      progressBar.classList.add(currClass);
    }
    progressBar.style.width = desc[score]['width'];
  }