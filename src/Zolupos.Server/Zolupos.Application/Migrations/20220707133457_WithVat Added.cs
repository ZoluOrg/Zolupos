using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class WithVatAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BunchSubTotal",
                table: "OrderedProducts");

            migrationBuilder.DropColumn(
                name: "Discount",
                table: "OrderedProducts");

            migrationBuilder.DropColumn(
                name: "TaxPercentage",
                table: "OrderedProducts");

            migrationBuilder.AddColumn<int>(
                name: "Discount",
                table: "Transactions",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubTotal",
                table: "Transactions",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Total",
                table: "Transactions",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Vat",
                table: "Transactions",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "WithVat",
                table: "Products",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 7, 13, 34, 57, 114, DateTimeKind.Utc).AddTicks(2264));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discount",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "SubTotal",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Total",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "Vat",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "WithVat",
                table: "Products");

            migrationBuilder.AddColumn<float>(
                name: "BunchSubTotal",
                table: "OrderedProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Discount",
                table: "OrderedProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "TaxPercentage",
                table: "OrderedProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 3, 7, 42, 43, 780, DateTimeKind.Utc).AddTicks(7244));
        }
    }
}
