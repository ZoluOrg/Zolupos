using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class MakeProfileNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Profile",
                table: "Employees",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CustomerProfile",
                table: "Customers",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1,
                columns: new[] { "CustomerFullName", "CustomerProfile" },
                values: new object[] { " ", null });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 27, 3, 14, 38, 94, DateTimeKind.Utc).AddTicks(2357));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Profile",
                table: "Employees");

            migrationBuilder.AlterColumn<string>(
                name: "CustomerProfile",
                table: "Customers",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Customers",
                keyColumn: "CustomerId",
                keyValue: 1,
                columns: new[] { "CustomerFullName", "CustomerProfile" },
                values: new object[] { "Sample Customer", "" });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 7, 26, 11, 29, 46, 855, DateTimeKind.Utc).AddTicks(7626));
        }
    }
}
