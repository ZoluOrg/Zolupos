using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class AddDiscount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 6, 30, 13, 16, 14, 222, DateTimeKind.Utc).AddTicks(4574));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 6, 30, 13, 16, 7, 294, DateTimeKind.Utc).AddTicks(8604));
        }
    }
}
