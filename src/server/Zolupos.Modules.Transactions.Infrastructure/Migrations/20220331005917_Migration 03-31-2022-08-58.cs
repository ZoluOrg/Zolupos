using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033120220858 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ordereditems_Transactions_ParentTransactionOrderTransaction~",
                table: "Ordereditems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ordereditems",
                table: "Ordereditems");

            migrationBuilder.RenameTable(
                name: "Ordereditems",
                newName: "OrderedItems");

            migrationBuilder.RenameIndex(
                name: "IX_Ordereditems_ParentTransactionOrderTransactionsId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_ParentTransactionOrderTransactionsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderedItems",
                table: "OrderedItems",
                column: "OrderedItemsId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionOrderTransaction~",
                table: "OrderedItems",
                column: "ParentTransactionOrderTransactionsId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionOrderTransaction~",
                table: "OrderedItems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderedItems",
                table: "OrderedItems");

            migrationBuilder.RenameTable(
                name: "OrderedItems",
                newName: "Ordereditems");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_ParentTransactionOrderTransactionsId",
                table: "Ordereditems",
                newName: "IX_Ordereditems_ParentTransactionOrderTransactionsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ordereditems",
                table: "Ordereditems",
                column: "OrderedItemsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ordereditems_Transactions_ParentTransactionOrderTransaction~",
                table: "Ordereditems",
                column: "ParentTransactionOrderTransactionsId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
