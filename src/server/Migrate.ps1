Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Write-Output "Set Exe Policy to Current User"

$CurrentTime = Get-Date -Format "MM-dd-yyyy-HH-mm"
$StartupProj = ".\Zolupos"
Write-Output "Migrating $CurrentTime"

try{
    dotnet ef migrations add "Migration $CurrentTime" --startup-project $StartupProj --project ".\Zolupos.Modules.Inventory.Infrastructure\Zolupos.Modules.Inventory.Infrastructure.csproj" --context InventoryDbContext
    dotnet ef migrations add "Migration $CurrentTime" --startup-project $StartupProj --project ".\Zolupos.Modules.Transactions.Infrastructure\Zolupos.Modules.Transactions.Infrastructure.csproj" --context TransactionsContext
    dotnet ef migrations add "Migration $CurrentTime" --startup-project $StartupProj --project ".\Zolupos.Modules.Employee.Infrastructure\Zolupos.Modules.Employee.Infrastructure.csproj" --context EmployeeDbContext
}
catch {
    Write-Error "Something failed"
}

dotnet ef database update --startup-project $StartupProj --project ".\Zolupos.Modules.Inventory.Infrastructure\Zolupos.Modules.Inventory.Infrastructure.csproj" --context InventoryDbContext
dotnet ef database update --startup-project $StartupProj --project ".\Zolupos.Modules.Transactions.Infrastructure\Zolupos.Modules.Transactions.Infrastructure.csproj" --context TransactionsContext
dotnet ef database update --startup-project $StartupProj --project ".\Zolupos.Modules.Employee.Infrastructure\Zolupos.Modules.Employee.Infrastructure.csproj" --context EmployeeDbContext