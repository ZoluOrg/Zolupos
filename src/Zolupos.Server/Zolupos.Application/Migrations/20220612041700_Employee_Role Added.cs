using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class Employee_RoleAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Employees",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                columns: new[] { "LastLogin", "Pin" },
                values: new object[] { new DateTime(2022, 6, 12, 4, 16, 59, 439, DateTimeKind.Utc).AddTicks(9072), 1989 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Employees");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                columns: new[] { "LastLogin", "Pin" },
                values: new object[] { new DateTime(2022, 6, 3, 1, 51, 24, 32, DateTimeKind.Utc).AddTicks(6688), 0 });
        }
    }
}
