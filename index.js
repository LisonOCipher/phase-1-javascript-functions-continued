// function saturdayFun with a default activity

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
   } 
   console.log(saturdayFun());
    console.log(saturday("bathe my dog"));
  
  
  // Define a function expression mondayWork with a default activity of "go to the office"
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  console.log(mondayWork());
  console.log(mondayWork("work from home"))
  
  // Define a function wrapAdjective that takes a string as a parameter and returns a function
  function wrapAdjective() {
    let result = wrapAdjective('*')
      let emphatic = result("a hard worker")
      return(`you are ${result} ${emphatic} ${result}!`);
    }
 
