$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Gh = "$env:ProgramFiles\GitHub CLI\gh.exe"
if (-not (Test-Path $Gh)) { $Gh = "$env:LocalAppData\Programs\GitHub CLI\gh.exe" }
if (-not (Test-Path $Gh)) { throw "Install GitHub CLI: winget install GitHub.cli" }

Set-Location $Root
& $Gh auth status

$Name = "apac-ta-employer-policy-monitor"
$User = & $Gh api user -q .login
Write-Host "GitHub user: $User"

$remotes = @(git remote 2>$null)
if ($remotes -contains "origin") {
  Write-Host "Remote origin already set."
} else {
  & $Gh repo create $Name --public --source=. --remote=origin --description "APAC TA Employer Policy Monitor (competitor hiring, visa, comp)"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Create failed (repo may exist). Adding remote manually..."
    git remote add origin "https://github.com/$User/$Name.git"
  }
}

git push -u origin main

& $Gh api "repos/$User/$Name/pages" -X POST -f build_type=workflow 2>$null | Out-Null

$Url = "https://$User.github.io/$Name/"
Write-Host ""
Write-Host "Pushed. Open after Deploy GitHub Pages succeeds:"
Write-Host $Url
Write-Host ""
Write-Host "ER News site (separate repo): https://$User.github.io/apac-ta-employer-monitor/"