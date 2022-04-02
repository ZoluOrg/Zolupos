﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Zolupos.Modules.Inventory.Infrastructure.Context;

#nullable disable

namespace Zolupos.Modules.Inventory.Infrastructure.Migrations
{
    [DbContext(typeof(InventoryDbContext))]
    [Migration("20220402064837_Migration 04-02-2022-14-48")]
    partial class Migration040220221448
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Zolupos.Modules.Inventory.Core.Entity.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ProductId"));

                    b.Property<string>("BarCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("LastEdit")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("LastRestock")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("ProductManufacturer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductQuantity")
                        .HasColumnType("integer");

                    b.Property<int>("ProductRetailCost")
                        .HasColumnType("integer");

                    b.Property<string>("ProductType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductWholeSaleCost")
                        .HasColumnType("integer");

                    b.HasKey("ProductId");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
