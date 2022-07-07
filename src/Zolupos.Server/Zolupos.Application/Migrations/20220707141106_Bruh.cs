using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class Bruh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductPrice",
                table: "Products",
                newName: "ProductUnitPrice");

            migrationBuilder.AddColumn<int>(
                name: "ProductUnitCost",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 7, 14, 11, 5, 584, DateTimeKind.Utc).AddTicks(470));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                columns: new[] { "ProductUnitCost", "WithVat" },
                values: new object[] { 5, true });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "ProductBarcode", "ProductManufacturer", "ProductName", "ProductQuantity", "ProductType", "ProductUnitCost", "ProductUnitPrice", "WithVat" },
                values: new object[] { 2, "00001", "Zolu", "Sample Product With Out Vat", 10, "Sample", 5, 10, false });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "ProductUnitCost",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "ProductUnitPrice",
                table: "Products",
                newName: "ProductPrice");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 7, 13, 34, 57, 114, DateTimeKind.Utc).AddTicks(2264));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1,
                column: "WithVat",
                value: false);
        }
    }
}
