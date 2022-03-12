Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Write-Output "Set Exe Policy to Current User"

$CurrentTime = Get-Date -Format "MM-dd-yyyy-HH-mm"
Write-Output "Migrating $CurrentTime"

dotnet ef migrations add $CurrentTime