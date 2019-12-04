    /* global localStorage */
    console.log('SCRIPT START')

    console.log('Declare testable functions......................')

    function add(x, y) { return x + y }
    console.log('Defined add=' + add)

    console.log('Declare event listeners .......................')

    window.addEventListener('load', (event) => {
      console.log('  Starting initialization ')
      if (localStorage.getItem('guest')) {
        document.querySelector('#guest').value = localStorage.getItem('guest')
        console.log(`  Stored guest = ${localStorage.guest}`)
      }
      if (localStorage.getItem('number1')) {
        document.querySelector('#firstNumber').value = parseInt(localStorage.number1)
        console.log(`  Stored num1 = ${localStorage.number1}`)
      }
      if (localStorage.getItem('number2')) {
        document.querySelector('#secondNumber').value = parseInt(localStorage.number2)
        console.log(`  Stored num2 = ${localStorage.number2}`)
      }
      console.log('  Finished initialization')
    })

    document.querySelector('#clicker').addEventListener('click', () => {
      console.log('  Starting clicker click handler')
      const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
      const s = document.querySelector('#guest').value
      console.log('s=' + s)
      const i = parseInt(document.querySelector('#firstNumber').value)
      console.log('i=' + i)
      const j = parseInt(document.querySelector('#secondNumber').value)
      console.log('j=' + j)
      const ct = origCount + 1
      const ans = `   ${s} , your sum is ${add(i,j)}. This has been run  ${ct}  times.`
      document.querySelector('#result').innerHTML = ans

      localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
      localStorage.setItem('guest', s)
      localStorage.setItem('number1', i)
      localStorage.setItem('number2', j)
      console.log('  Finished clicker click handler')
    })

    document.querySelector('#wiper').addEventListener('click', () => {
      console.log('  Starting wiper click handler')
      localStorage.removeItem('countOfClicks')
      localStorage.removeItem('guest')
      localStorage.removeItem('number1')
      localStorage.removeItem('number2')
      console.log('  Finished wiper click handler - localStorage entries removed')
    })

    console.log('SCRIPT END')

