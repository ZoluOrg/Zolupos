using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class TransactionStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Transactions",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Devices",
                keyColumn: "DeviceId",
                keyValue: 1,
                columns: new[] { "LastUsed", "RegistrationDate" },
                values: new object[] { new DateTime(2022, 8, 28, 14, 3, 41, 150, DateTimeKind.Utc).AddTicks(2894), new DateTime(2022, 8, 28, 14, 3, 41, 150, DateTimeKind.Utc).AddTicks(2899) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 8, 28, 14, 3, 41, 150, DateTimeKind.Utc).AddTicks(2967));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Transactions");

            migrationBuilder.UpdateData(
                table: "Devices",
                keyColumn: "DeviceId",
                keyValue: 1,
                columns: new[] { "LastUsed", "RegistrationDate" },
                values: new object[] { new DateTime(2022, 8, 25, 5, 8, 55, 197, DateTimeKind.Utc).AddTicks(2495), new DateTime(2022, 8, 25, 5, 8, 55, 197, DateTimeKind.Utc).AddTicks(2498) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 8, 25, 5, 8, 55, 197, DateTimeKind.Utc).AddTicks(2574));
        }
    }
}
