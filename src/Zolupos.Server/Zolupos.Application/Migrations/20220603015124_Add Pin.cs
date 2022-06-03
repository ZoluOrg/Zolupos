using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class AddPin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Pin",
                table: "Employees",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 6, 3, 1, 51, 24, 32, DateTimeKind.Utc).AddTicks(6688));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pin",
                table: "Employees");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 6, 1, 13, 38, 48, 124, DateTimeKind.Utc).AddTicks(4082));
        }
    }
}
