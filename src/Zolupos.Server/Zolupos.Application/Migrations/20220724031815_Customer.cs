using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class Customer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerIdentifer",
                table: "Customers");

            migrationBuilder.RenameColumn(
                name: "CustomerPoint",
                table: "Customers",
                newName: "CustomerSpent");

            migrationBuilder.RenameColumn(
                name: "CustomerName",
                table: "Customers",
                newName: "CustomerPhoneNumber");

            migrationBuilder.AddColumn<string>(
                name: "CustomerEmail",
                table: "Customers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CustomerFirstName",
                table: "Customers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CustomerLastName",
                table: "Customers",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1,
                columns: new[] { "CustomerEmail", "CustomerFirstName", "CustomerLastName", "CustomerPhoneNumber" },
                values: new object[] { "Sample@customer.com", "Sample", "Employee", "0925" });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 24, 3, 18, 14, 808, DateTimeKind.Utc).AddTicks(4892));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerEmail",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "CustomerFirstName",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "CustomerLastName",
                table: "Customers");

            migrationBuilder.RenameColumn(
                name: "CustomerSpent",
                table: "Customers",
                newName: "CustomerPoint");

            migrationBuilder.RenameColumn(
                name: "CustomerPhoneNumber",
                table: "Customers",
                newName: "CustomerName");

            migrationBuilder.AddColumn<Guid>(
                name: "CustomerIdentifer",
                table: "Customers",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1,
                columns: new[] { "CustomerIdentifer", "CustomerName" },
                values: new object[] { new Guid("598f6519-d4f6-417e-8181-f79d3e98b8e5"), "Sample Customer" });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 21, 4, 34, 26, 824, DateTimeKind.Utc).AddTicks(9346));
        }
    }
}
