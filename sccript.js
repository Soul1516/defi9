
function verifierChaine(chaine){
    if(chaine.substring(4,8)==='Code'){
        console.log('TROUVE')
        chaine=chaine.replace("Code","")
        return chaine
    }else{
        return chaine
    }
}

//console.log(verifierChaine("Mon Code est bon"))
//console.log(verifierChaine("Votre Code est bon"))

//Écrivez un programme JavaScript pour capitaliser la première lettre de chaque mot d'une chaîne donnée.
function capitaliserChaine(chaine){  
       let mots=chaine.split(' ')
       for(let i=0;i<mots.length;i++){
        mots[i]=mots[i][0].toUpperCase()+mots[i].substring(1)
       }
       return mots.join(' ')
}

//console.log(capitaliserChaine('le renard brun rapide'))

//Résultat attendu : "le-rnabrpd"

//Écrivez un programme JavaScript pour vérifier si tous les chiffres d'un nombre donné sont les mêmes ou non.

function verifierNombre(nombre){
    nombre=nombre.toString()
    for(let i=0;i<nombre.length;i++){
        if(nombre[0]===nombre[i]){
           continue
        }else{
            console.log('Les chiffres sont differents')
            return
        }
    }
    console.log(`Les chiffres de ce nombre ${nombre} sont identiques`)
    return
}

//verifierNombre(12345)
//verifierNombre(111111)

//Écrivez une fonction JavaScript pour inverser un nombre.

function inverseChiffres(nombre){
    nombre=nombre.toString()
    let tableau=nombre.split('')
    let temp=0
    for(let i=0;i<Math.floor(nombre.length/2);i++){
       temp=nombre[i]
       tableau[i]=tableau[tableau.length-i-1]
       tableau[tableau.length-i-1]=temp
    }
   return tableau.join('')
}
//console.log(inverseChiffres(12345))
//Écrivez une fonction JavaScript pour extraire les caractères uniques d'une chaîne.

function extraireChar(chaine){
    let unique=new Set()
    for(let i=0;i<chaine.length;i++){
        for(let j=0;j<chaine.length;j++){
            if(chaine[i]!==chaine[j]){
                unique.add(chaine[i])
            }
        }
    }
    
    return [...unique].join('')
}
//console.log(extraireChar('le-renard-brun-rapide'))

//Écrivez une fonction JavaScript pour découper une chaîne en morceaux d'une longueur donnée.

