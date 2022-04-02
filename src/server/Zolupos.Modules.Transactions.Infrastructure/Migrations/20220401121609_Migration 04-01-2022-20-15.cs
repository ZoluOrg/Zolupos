using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration040120222015 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    OrderTransactionsId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TransactedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Total = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.OrderTransactionsId);
                });

            migrationBuilder.CreateTable(
                name: "OrderedItems",
                columns: table => new
                {
                    OrderedItemsId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ProductOrderedId = table.Column<int>(type: "integer", nullable: false),
                    ProductOrderedQuantity = table.Column<int>(type: "integer", nullable: false),
                    isProductReturned = table.Column<bool>(type: "boolean", nullable: false),
                    OrderTransactionsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderedItems", x => x.OrderedItemsId);
                    table.ForeignKey(
                        name: "FK_OrderedItems_Transactions_OrderTransactionsId",
                        column: x => x.OrderTransactionsId,
                        principalTable: "Transactions",
                        principalColumn: "OrderTransactionsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderedItems_OrderTransactionsId",
                table: "OrderedItems",
                column: "OrderTransactionsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderedItems");

            migrationBuilder.DropTable(
                name: "Transactions");
        }
    }
}
