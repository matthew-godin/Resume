./fetch_and_build.ps1
git add .
if ($args[0] -eq $null) {
    git commit -m "update"
} else {
    git commit -m $args[0]
}
git push origin master