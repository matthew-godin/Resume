rm .\matthew-godin-resume.pdf
pm2 start .\node_modules\react-scripts\scripts\start.js
while (!(Test-NetConnection localhost -Port 3000).TcpTestSucceeded) { Start-Sleep 1 }
chrome --headless --print-to-pdf="$HOME\resume\matthew-godin-resume.pdf" --no-pdf-header-footer http://desktop-mtrbk7e:3000/
while (!(Test-Path .\matthew-godin-resume.pdf -PathType Leaf)) { Start-Sleep 1 }
pm2 delete all
git add .
git commit -m "update"
git push origin master