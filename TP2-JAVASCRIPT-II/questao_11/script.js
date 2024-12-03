function ehPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    
    const palavraInvertida = palavraLimpa.split('').reverse().join('');
    
    return palavraLimpa === palavraInvertida;
}

// Exemplos da função
console.log(ehPalindromo("ovo"));      
console.log(ehPalindromo("asa"));      
console.log(ehPalindromo("radar"));    
console.log(ehPalindromo("osso"));     
console.log(ehPalindromo("hello"));    // false
console.log(ehPalindromo("A man a plan a canal Panama")); 