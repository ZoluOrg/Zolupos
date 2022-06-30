﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Zolupos.Application.Infrastructure.Context;

#nullable disable

namespace Zolupos.Application.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220630131614_Add Discount")]
    partial class AddDiscount
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Zolupos.Application.Entities.Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("CustomerId"));

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("CustomerPoint")
                        .HasColumnType("integer");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            CustomerId = 1,
                            CustomerName = "Sample Customer",
                            CustomerPoint = 0
                        });
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Employee", b =>
                {
                    b.Property<int>("EmployeeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("EmployeeId"));

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("LastLogin")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("PhoneNumber")
                        .HasColumnType("integer");

                    b.Property<int>("Pin")
                        .HasColumnType("integer");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SurName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("EmployeeId");

                    b.ToTable("Employees");

                    b.HasData(
                        new
                        {
                            EmployeeId = 1,
                            FirstName = "Sample",
                            FullName = "Sample Employee",
                            LastLogin = new DateTime(2022, 6, 30, 13, 16, 14, 222, DateTimeKind.Utc).AddTicks(4574),
                            PhoneNumber = 81234567,
                            Pin = 1989,
                            Role = "Admin",
                            SurName = "Employee"
                        });
                });

            modelBuilder.Entity("Zolupos.Application.Entities.OrderedProduct", b =>
                {
                    b.Property<int>("OrderedProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("OrderedProductId"));

                    b.Property<float>("BunchPrice")
                        .HasColumnType("real");

                    b.Property<float>("Discount")
                        .HasColumnType("real");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<int>("TransactionId")
                        .HasColumnType("integer");

                    b.HasKey("OrderedProductId");

                    b.HasIndex("ProductId");

                    b.HasIndex("TransactionId");

                    b.ToTable("OrderedProducts");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ProductId"));

                    b.Property<string>("ProductBarcode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProductManufacturer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductPrice")
                        .HasColumnType("integer");

                    b.Property<int>("ProductQuantity")
                        .HasColumnType("integer");

                    b.Property<string>("ProductType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            ProductBarcode = "00001",
                            ProductManufacturer = "Zolu",
                            ProductName = "Sample Product",
                            ProductPrice = 10,
                            ProductQuantity = 10,
                            ProductType = "Sample"
                        });
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.Property<int>("TransactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TransactionId"));

                    b.Property<int>("CustomerId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("TransactedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("TransactionId");

                    b.HasIndex("CustomerId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.OrderedProduct", b =>
                {
                    b.HasOne("Zolupos.Application.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Zolupos.Application.Entities.Transaction", "Transaction")
                        .WithMany("OrderedProducts")
                        .HasForeignKey("TransactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("Transaction");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.HasOne("Zolupos.Application.Entities.Customer", "TransactionCustomer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TransactionCustomer");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.Navigation("OrderedProducts");
                });
#pragma warning restore 612, 618
        }
    }
}
