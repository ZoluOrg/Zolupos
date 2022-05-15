using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Employee.Infrastructure.Migrations
{
    public partial class Migration051520221628 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PinHashed",
                table: "Employees",
                newName: "Pin");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Pin",
                table: "Employees",
                newName: "PinHashed");
        }
    }
}
