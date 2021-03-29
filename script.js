

const $input = document.getElementById('input');
const $output = document.getElementById('output');
const $missionStatment = document.getElementById('mission-statement')
const $weatherReport = document.getElementById('weather-report')
const $lunchRoom = document.getElementById('lunch-room')
const $story = document.getElementById('story')
const $word = document.querySelector('.word')













 
 //

const $container = document.querySelector('container')

$missionStatment.addEventListener('click', function(e) {
    let newElement = [] // Empty Array 
    newElement.push(`<form id = 'display'>`) // Pushing <form> into empty array.
    
    /* Looping the word object*/ 
    
    for (const word of stories[0].words) {
          newElement.push(`<input type="text" name="${word}" placeholder="${word}">`)
     }
      
     newElement.push(`<button type ='submit'>click to see!</button>`)
     newElement.push('</form>')
    
     $input.innerHTML = newElement.join('')
     
     
     const $form = document.getElementById('display')
     $form.addEventListener('submit', function(e) {
          e.preventDefault()
          
          const $results = $form.value
         
         const words = {}
          
          for (const element of $form.elements) {
               words[element.name] = element.value

          }
          console.log(words)
          $story.innerHTML = stories[0].output(words)
     
})
     
})

///


$weatherReport.addEventListener('click', function(e) {
     let newElement2 = [] // Empty Array 
     newElement2.push(`<form id = 'display'>`) // Pushing <form> into empty array.
     
     /* Looping the word object*/ 
     
     for (const word of stories[1].words) {
           newElement2.push(`<input type="text" name="${word}" placeholder="${word}">`)
      }
       
      newElement2.push(`<button type ='submit'>click to see!</button>`)
      newElement2.push('</form>')
     
      $input.innerHTML = newElement2.join('')
      
      
      const $form = document.getElementById('display')
      $form.addEventListener('submit', function(e) {
           e.preventDefault()
           
           const $results = $form.value

           const words = {}
           
           for (const element of $form.elements) {
               words[element.name] = element.value
           }
           console.log(words)
           $story.innerHTML = stories[2].output(words)
      
 })
      
 })

////



$lunchRoom.addEventListener('click', function(e) {
     let newElement3 = [] // Empty Array 
     newElement3.push(`<form id = 'display'>`) // Pushing <form> into empty array.
     
     /* Looping the word object*/ 
     
     for (const word of stories[2].words) {
           newElement3.push(`<input type="text" name="${word}" placeholder="${word}">`)
      }
       
      newElement3.push(`<button type ='submit'>click to see!</button>`)
      newElement3.push('</form>')
     
      $input.innerHTML = newElement3.join('')
      
      
      const $form = document.getElementById('display')
      $form.addEventListener('submit', function(e) {
           e.preventDefault()
           
           const $results = $form.value
           const words = {}
           
           for (const element of $form.elements) {
                    words[element.name] = element.value 
         
           }
           console.log(words)
           $story.innerHTML = stories[1].output(words);
 })
      
 })




