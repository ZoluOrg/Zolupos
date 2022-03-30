using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    public partial class Migration033020222011 : Migration
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
                name: "Ordereditems",
                columns: table => new
                {
                    OrderedItemsId = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ProductRef = table.Column<int>(type: "integer", nullable: false),
                    TransacactionRef = table.Column<int>(type: "integer", nullable: false),
                    ParentTransactionOrderTransactionsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ordereditems", x => x.OrderedItemsId);
                    table.ForeignKey(
                        name: "FK_Ordereditems_Transactions_ParentTransactionOrderTransaction~",
                        column: x => x.ParentTransactionOrderTransactionsId,
                        principalTable: "Transactions",
                        principalColumn: "OrderTransactionsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ordereditems_ParentTransactionOrderTransactionsId",
                table: "Ordereditems",
                column: "ParentTransactionOrderTransactionsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ordereditems");

            migrationBuilder.DropTable(
                name: "Transactions");
        }
    }
}
