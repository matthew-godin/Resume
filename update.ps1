rm .\matthew-godin-resume.pdf
pm2 start .\node_modules\react-scripts\scripts\start.js
while (!(Test-NetConnection localhost -Port 3000).TcpTestSucceeded) { Start-Sleep 1 }
chrome --headless --print-to-pdf="$HOME\Resume\matthew-godin-resume.pdf" --no-pdf-header-footer http://${env:computername}:3000/
while (!(Test-Path .\matthew-godin-resume.pdf -PathType Leaf)) { Start-Sleep 1 }
pm2 delete all
git add .
if ($args[0] -eq $null) {
    git commit -m "update"
} else {
    git commit -m $args[0]
}
git push origin master