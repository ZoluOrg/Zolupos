using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Inventory.Infrastructure.Migrations
{
    public partial class Migration032420221059 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductRetailCost",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ProductWholeSaleCost",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductRetailCost",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ProductWholeSaleCost",
                table: "Products");
        }
    }
}
