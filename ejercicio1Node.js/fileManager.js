//const rfile = require("./archivosNodeJS/readFile")
//const wfile = require("./archivosNodeJS/writeFile")
const afile = require("./archivosNodeJS/appendFile")
//const ofile = require("./archivosNodeJS/openFile")
//const dfile = require("./archivosNodeJS/deleteFile")
const rfile = require("./archivosNodeJS/renameFile")
const cfile = require("./archivosNodeJS/copyFile")
const cDir = require("./archivosNodeJS/createDir")


const nombres = 'Abner Saavedra  /n Lino Benavides'
/*rfile.readThisFile("./files/participantes.txt")

wfile.writeToFile("./files/fileToWrite-1.txt", "Hola mundo 2")

afile.appendToFile("./files/fileToAppend.txt", "Hola mundo")

ofile.openFile("./files/fileToOpen.txt", "Hola mundo 7")*/

//dfile.deleteFile("./files/fileToRename2-1.txt")

//cDir.createDirectory("./files/img")

//cfile.copyAFile("./files/participantes.txt", "./files/participantes1.txt")

afile.appendToFile("./files/participantes.txt", nombres)
//rfile.renameFile("./files/fileToRename2.txt", "./files/fileToRename2-1.txt")


rfile.renameFile("./files/participantes.txt", "./files/participantes181023.txt")


cDir.createDirectory("./files/respaldo")
cfile.copyAFile("./files/participantes181023.txt", "./files/respaldo/participantes181023-1.txt")