myFile.runContents();

function shouldContinue() {
  // check one: any pending setTimeout,setInterval,setImmediate?
  // check two:r any pending os task
  // check three: any pending long running operations like fs mod
}

while (shouldContinue) {}
