console.log("JS File Loaded");

function outputDemo()
{
  var output = document.getElementById("myText").value;

  console.log(output);

  alert(output);

  document.getElementById("output").innerHTML = "You entered: " + output;

  if document.getElementById("myText").value = "im stupid"{
    console.log("youre stupid");
  }
}
