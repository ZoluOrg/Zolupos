using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Zolupos.Modules.Transaction.Infrustructure.Migrations
{
    public partial class Migration032420221059 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BarCode",
                table: "OrderedProducts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BarCode",
                table: "OrderedProducts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
