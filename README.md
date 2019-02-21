# EcoWeb
web que ayuda al reciclaje

PASOS GIT:
// Clonar repositorio
git clone https://github.com/edhak/EcoWeb.git
// Ubicados en el respositorio clonado
// Set configuraciones de usuario
git config --global user.name "manu9418"
git config --global user.email xxxxxxxxx@gmail.com
// Para ver las configuraciones
git config --list
// crear rama
git branch eco-news
// movernos a la rama
git checkout eco-news
// verificar en que rama nos encontramos
git branch
// Despues de haber modificado algunas cosas
// Add file contents to the index
git add .
// Show the working tree status
git status
// Record changes to the repository
git commit -m "add seccion de noticias" archivo_modificado.extension
// Update remote refs along with associated objects
git push -u origin eco-news  
