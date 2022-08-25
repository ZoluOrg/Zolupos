using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class Relation_DevID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Devices",
                keyColumn: "DeviceId",
                keyValue: 1,
                columns: new[] { "LastUsed", "RegistrationDate" },
                values: new object[] { new DateTime(2022, 8, 25, 3, 57, 40, 941, DateTimeKind.Utc).AddTicks(2196), new DateTime(2022, 8, 25, 3, 57, 40, 941, DateTimeKind.Utc).AddTicks(2199) });

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 8, 25, 3, 57, 40, 941, DateTimeKind.Utc).AddTicks(2238));
        }
    }
}
