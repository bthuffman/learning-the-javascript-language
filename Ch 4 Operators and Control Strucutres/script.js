//&& is and
// || is or
let animal1 = "monkey";
let animal2 = "bear";
let animal3 = "tiger";

//if important to execute both things together then use &&. All must return true for this to be true
animal1 === 'monkey' && animal2 === 'bear'

//using or requires that all be false in order for it to be false, but if one is true then it returns true. Operator precedence, && are evaluated first. If want to seperate use (). In this case the () keep the ors together before seeing if animal3 is a tiger.
(animal1 === 'monkey' || animal2 === 'bear') && animal3 === 'tiger'

//logical not (bang) ! inverts logic
!true //returns false
!false //returns true
!(animal1 === 'monkey' && animal2 === 'bear') //inversts to following...
animal1 !== 'monkey' || animal2 !== 'bear'