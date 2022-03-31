using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033120221840 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_TransactionId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "TransactionId",
                table: "OrderedItems",
                newName: "OrderTransactionsId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_TransactionId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_OrderTransactionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_OrderTransactionsId",
                table: "OrderedItems",
                column: "OrderTransactionsId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_OrderTransactionsId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "OrderTransactionsId",
                table: "OrderedItems",
                newName: "TransactionId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_OrderTransactionsId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_TransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_TransactionId",
                table: "OrderedItems",
                column: "TransactionId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
