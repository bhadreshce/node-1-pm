// block of code that work reapetedly in our program
// function sum() {
//   console.log(12 + 12)
// }

// sum()

// function oddEven(a) {
//   if (a % 2 == 0) {
//     console.log('even')
//   } else {
//     console.log('odd')
//   }
// }

//C = 5/9( F – 32) ferenhit to celsios
// oddEven(4)
// with parameter , without return
// function sum(a, b) {
//   console.log(a + b)
// }

// sum(3, 2)

// without parameter with return

// function sums() {
//   return 4
// }
setInterval(() => {
    
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        array.forEach(element => {
          setTimeout(() => {
              setInterval(() => {
                function name(params) {
                    array.forEach(element => {
                       setInterval(() => {
                          // var c = sums()
                          // console.log(c)
                          // with return with parameter
                          
                          // function sum(a, b) {
                          //   return a + b
                          // }
                          
                          // var c = sum(3, 2)
                          // console.log(c)
                       }, interval);
                    });
                }
              }, interval);
          }, timeout);
        });
      }
 }
}, interval);
         
// sums()
