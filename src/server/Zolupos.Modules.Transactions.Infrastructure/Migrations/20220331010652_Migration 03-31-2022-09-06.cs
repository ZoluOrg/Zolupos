using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033120220906 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionOrderTransaction~",
                table: "OrderedItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderedItems_ParentTransactionOrderTransactionsId",
                table: "OrderedItems");

            migrationBuilder.DropColumn(
                name: "ParentTransactionOrderTransactionsId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "TransacactionRef",
                table: "OrderedItems",
                newName: "ProductOrderedId");

            migrationBuilder.RenameColumn(
                name: "ProductRef",
                table: "OrderedItems",
                newName: "ParentTransactionId");

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    LastEdit = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastRestock = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ProductName = table.Column<string>(type: "text", nullable: false),
                    BarCode = table.Column<string>(type: "text", nullable: false),
                    ProductManufacturer = table.Column<string>(type: "text", nullable: false),
                    ProductType = table.Column<string>(type: "text", nullable: false),
                    ProductQuantity = table.Column<int>(type: "integer", nullable: false),
                    ProductRetailCost = table.Column<int>(type: "integer", nullable: false),
                    ProductWholeSaleCost = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ProductId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderedItems_ParentTransactionId",
                table: "OrderedItems",
                column: "ParentTransactionId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderedItems_ProductOrderedId",
                table: "OrderedItems",
                column: "ProductOrderedId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Product_ProductOrderedId",
                table: "OrderedItems");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionId",
                table: "OrderedItems");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropIndex(
                name: "IX_OrderedItems_ParentTransactionId",
                table: "OrderedItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderedItems_ProductOrderedId",
                table: "OrderedItems");

            migrationBuilder.RenameColumn(
                name: "ProductOrderedId",
                table: "OrderedItems",
                newName: "TransacactionRef");

            migrationBuilder.RenameColumn(
                name: "ParentTransactionId",
                table: "OrderedItems",
                newName: "ProductRef");

            migrationBuilder.AddColumn<int>(
                name: "ParentTransactionOrderTransactionsId",
                table: "OrderedItems",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderedItems_ParentTransactionOrderTransactionsId",
                table: "OrderedItems",
                column: "ParentTransactionOrderTransactionsId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Transactions_ParentTransactionOrderTransaction~",
                table: "OrderedItems",
                column: "ParentTransactionOrderTransactionsId",
                principalTable: "Transactions",
                principalColumn: "OrderTransactionsId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
