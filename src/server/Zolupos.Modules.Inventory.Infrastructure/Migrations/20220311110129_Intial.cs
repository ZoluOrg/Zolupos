using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Inventory.Infrastructure.Migrations
{
    public partial class Intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Products",
                newName: "ProductQuantity");

            migrationBuilder.RenameColumn(
                name: "BrandName",
                table: "Products",
                newName: "ProductType");

            migrationBuilder.AddColumn<string>(
                name: "ProductManufacturer",
                table: "Products",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductManufacturer",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "ProductType",
                table: "Products",
                newName: "BrandName");

            migrationBuilder.RenameColumn(
                name: "ProductQuantity",
                table: "Products",
                newName: "Quantity");
        }
    }
}
