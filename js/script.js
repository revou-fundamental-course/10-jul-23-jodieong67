let google = document.getElementById('btn_google');
let apple = document.getElementById('btn_apple');
let consult1 = document.getElementById('consult1');
let consult2 = document.getElementById('consult2');
let button = document.getElementById('btnBMI');
let buttReset = document.getElementById('bntReset');
console.log(button);

button.addEventListener('click', () => {
    /*input*/
    const genderPria = parseInt(document.getElementById('pria').value);
    const genderWanita = parseInt(document.getElementById('wanita').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const year = parseInt(document.getElementById('year').value);

    const result = parseInt(document.getElementById('bmi_output').value);
    let genderPria_status=false, genderWanita_status=false, height_status=false, weight_status=false, year_status=false;

    if(document.getElementById('pria').checked == false && document.getElementById('wanita').checked == false){
        document.getElementById('gender_error').innerHTML = "Wajib pilih salah satu";
    }else{
        document.getElementById('gender_error').innerHTML = '';
        gender_status=true; 
    }

    if(height === '' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = "Mohon input angka tinggi badan (cm) yang benar";
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = "Mohon input angka berat badan (kg) yang benar";
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(year === '' || isNaN(year) || (year <=0)){
        document.getElementById('year_error').innerHTML = "Mohon input angka tahun yang benar";
    }else{
        document.getElementById('year_error').innerHTML = '';
        year_status=true;
    }

    if(height_status == true && weight_status == true){
        const bmi = (weight / ((height*height))*10000).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Kekurangan berat badan : ' + bmi;
        }else if(bmi>= 18.6 && bmi <=24.9){
            result.innerHTML = 'Normal (ideal) : ' + bmi;
        }else if(bmi>= 25.0 && bmi <=29.9){
            result.innerHTML = 'Kelebihan berat badan : ' + bmi;
        }else {
            result.innerHTML = 'Kegemutan (obesitas) : ' + bmi;
        }
        window.location.href = "BMI_Result.html";

    }else{
        alert('Terdapat error dalam inputan form');
        result.innerHTML = '';
    }
    
});

google.addEventListener('click', () => {
    window.location.href = "https://play.google.com/store/";
});

apple.addEventListener('click', () => {
    window.location.href = "https://www.apple.com/id/";
});

consult1.addEventListener('click', () => {
    window.location.href = "https://www.halodoc.com/";
});

consult2.addEventListener('click', () => {
    window.location.href = "https://www.halodoc.com/";
});
