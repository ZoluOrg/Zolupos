using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033120221319 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Product_ProductOrderedId",
                table: "OrderedItems");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "ProductOrderedId",
                table: "OrderedItems",
                newName: "TransactionId");

            migrationBuilder.RenameColumn(
                name: "ParentTransactionId",
                table: "OrderedItems",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_ProductOrderedId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_TransactionId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_ParentTransactionId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Product_ProductId",
                table: "OrderedItems",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_TransactionId",
                table: "OrderedItems",
                column: "TransactionId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Product_ProductId",
                table: "OrderedItems");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_TransactionId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "TransactionId",
                table: "OrderedItems",
                newName: "ProductOrderedId");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "OrderedItems",
                newName: "ParentTransactionId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_TransactionId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_ProductOrderedId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderedItems_ProductId",
                table: "OrderedItems",
                newName: "IX_OrderedItems_ParentTransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Product_ProductOrderedId",
                table: "OrderedItems",
                column: "ProductOrderedId",
                principalTable: "Product",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionId",
                table: "OrderedItems",
                column: "ParentTransactionId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
