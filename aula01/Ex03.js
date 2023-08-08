console.log('esse codigo determina o maior numero, o menor e o medio entre tres variaveis')

var a = 9
var b = 6
var c = 7

if(a > c && a > b) {
    console.log('a eh o maior numero')
    var m = a

}else { 
    if(b > a && b > c) {
        console.log('b eh o maior numero')
        var m = b
    
    
    }else {
        console.log('c eh o maior numero')
        var m = c
    
    }
}

if(a < c && a < b) {
    console.log('a eh o menor numero')
    var n = a

}else { 
    if(b < a && b < c) {
        console.log('b eh o menor numero')
        var n = b
    
    
    }else { 
        if(c < a && c < b)
            console.log('c eh o menor numero')
            var n = c
        
    }
}

if(a == n || a == m) {
    if(b == n || b == m){
        if(c == n || c == m){

        }else {
            console.log('c eh o numero medio')
        }
    }else {
        console.log('b eh o numero medio')
    } 
} else {
    console.log('a eh o numero medio')
}

// feito

