using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Application.Migrations
{
    public partial class AddTaxandBunchSub : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BunchPrice",
                table: "OrderedProducts",
                newName: "TaxPercentage");

            migrationBuilder.AddColumn<float>(
                name: "BunchSubTotal",
                table: "OrderedProducts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "BunchTotal",
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BunchSubTotal",
                table: "OrderedProducts");

            migrationBuilder.DropColumn(
                name: "BunchTotal",
                table: "OrderedProducts");

            migrationBuilder.RenameColumn(
                name: "TaxPercentage",
                table: "OrderedProducts",
                newName: "BunchPrice");

            migrationBuilder.UpdateData(
                table: "Employees",
                keyColumn: "EmployeeId",
                keyValue: 1,
                column: "LastLogin",
                value: new DateTime(2022, 6, 30, 13, 16, 14, 222, DateTimeKind.Utc).AddTicks(4574));
        }
    }
}
