// FUNCOES GENERICAS

//Formatar valor monetario
export function numberFormat(num) {
    return (
    num
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    )
}

//Formatar cpf/cnpj sem mascara
export function documentoFormat(documento){
 
    //Remove tudo o que não é dígito
    documento = documento.replace(/\D/g,"")
 
    if (documento.length < 14) { //CPF
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        documento = documento.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        documento = documento.replace(/(\d{3})(\d)/,"$1.$2")
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        documento = documento.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    } else { //CNPJ
 
        //Coloca ponto entre o segundo e o terceiro dígitos
        documento = documento.replace(/^(\d{2})(\d)/,"$1.$2")
 
        //Coloca ponto entre o quinto e o sexto dígitos
        documento = documento.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
 
        //Coloca uma barra entre o oitavo e o nono dígitos
        documento = documento.replace(/\.(\d{3})(\d)/,".$1/$2")
 
        //Coloca um hífen depois do bloco de quatro dígitos
        documento = documento.replace(/(\d{4})(\d)/,"$1-$2")
    }
    return documento
}

//Obtem o bearer token da aplicação
export function getTokenId() {
    return localStorage.getItem('access_token')
}
        