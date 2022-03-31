using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033120221437 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderedItems_Product_ProductId",
                table: "OrderedItems");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropIndex(
                name: "IX_OrderedItems_ProductId",
                table: "OrderedItems");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BarCode = table.Column<string>(type: "text", nullable: false),
                    LastEdit = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    LastRestock = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ProductManufacturer = table.Column<string>(type: "text", nullable: false),
                    ProductName = table.Column<string>(type: "text", nullable: false),
                    ProductQuantity = table.Column<int>(type: "integer", nullable: false),
                    ProductRetailCost = table.Column<int>(type: "integer", nullable: false),
                    ProductType = table.Column<string>(type: "text", nullable: false),
                    ProductWholeSaleCost = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ProductId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderedItems_ProductId",
                table: "OrderedItems",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderedItems_Product_ProductId",
                table: "OrderedItems",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
