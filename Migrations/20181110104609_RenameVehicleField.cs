using Microsoft.EntityFrameworkCore.Migrations;

namespace v3ga.Migrations
{
    public partial class RenameVehicleField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsRegister",
                table: "Vehicles",
                newName: "IsRegistered");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsRegistered",
                table: "Vehicles",
                newName: "IsRegister");
        }
    }
}
