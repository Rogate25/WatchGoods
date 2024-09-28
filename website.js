    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');


    if(bar){
     bar.addEventListener('click',()=>{
            nav.classList.add('active')
     })
    }

    if(close){
      close.addEventListener('click',()=>{
         nav.classList.remove('active')
        })
    }
    
    

    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const region = document.getElementById('region');   
    const bird = document.getElementById('bird');
    const agree = document.getElementById('agree')

 form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const regionValue = region.value.trim();
    const birdValue = bird.value.trim();

    if(usernameValue === '') {
        setError(username, 'Full name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(regionValue === '') {
        setError(region, 'Region is required');
    }else {
        setSuccess(region);
    }

    if(birdValue === '') {
        setError(bird, 'Massage cannot be empty');
    }else{
        setSuccess(bird);
    }

    if(!agree.checked){
        setError(agree, 'You must agree to receive a copy of my massage');
    }else{
        setSuccess(agree);
    }
   

};








   