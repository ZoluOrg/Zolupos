# Migration
- Open Package Manager Console in Visual Studio `tools -> Nuget Package Manager -> Package Manager Console`

### Migration for UserTransaction
- Choose `Zolupos.Modules.Transaction.Infrastructure` as the default project in the package manager console
- Run `Add-Migration Intial -Context TransactionDbContext`
- Then run `Update-Database- Context TransactionDbContext` to update the database.

### Migration for Inventory
- Choose `Zolupos.Modules.Inventory.Infrastructure` as the default project in the package manager console
- Run `Add-Migration Inital -Context InventoryDbContext` to create a migration.
- Then run `Update-Database- Context InventoryDbContext` to update the database.