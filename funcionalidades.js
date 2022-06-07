function calcular(){
    var alt = (document.getElementById('altura').value) / 100;
    var pes = document.getElementById('peso').value;

    var imc = pes / (alt**2)
    if (imc < 18.5){
        window.alert("Você esta magro!")
    }else if (imc < 24.9 ){
        window.alert('Você esta no peso ideal!')
    }else if (imc < 29.9){
        window.alert('Você esta com sobrepeso!')
    }else if (imc < 39.9){
        window.alert('Você esta com obsidade!')
    }else if (imc > 39.9){
        window.alert("Você esta com obseidade mórbida!")
    }
}
        
    