using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class AddSeedig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "CustomerId", "CustomerName", "CustomerPoint" },
                values: new object[] { 1, "Sample Customer", 0 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "ProductBarcode", "ProductName", "ProductPrice", "ProductQuantity" },
                values: new object[] { 1, "00001", "Sample Product", 10, 10 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1);
        }
    }
}
