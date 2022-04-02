
 
  function titleCased() {

    const tutorials = [
      'what does the this keyword mean?',
      'What is the Constructor OO pattern?',
      'implementing Blockchain Web API',
      'The Test Driven Development Workflow',
      'What is NaN and how Can we Check for it',
      'What is the difference between stopPropagation and preventDefault?',
      'Immutable State and Pure Functions',
      'what is the difference between == and ===?',
      'what is the difference between event capturing and bubbling?',
      'what is JSONP?'
    ]

    const split = tutorials.map(element => element.split(' '))
    // console.log(split)

           
  const capital = split.map(element => {
    let capitalized = []

        for (let item of element) { 
            //console.log(typeof element)
            //console.log(element)
          capitalized.push(item.charAt().toUpperCase() + item.slice(1))
        
        }
        return capitalized
    })
  
   //console.log(capital)
    const final = capital.map(element => {
               return element.join(' ')
              
    })
                //console.log(final)
               return final
  }

  
  