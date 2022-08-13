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
    [Migration("20220811134557_Added UnitCost")]
    partial class AddedUnitCost
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

                    b.Property<string>("CustomerEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CustomerFirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CustomerFullName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CustomerLastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CustomerPhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CustomerProfile")
                        .HasColumnType("text");

                    b.Property<int>("CustomerSpent")
                        .HasColumnType("integer");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");

                    b.HasData(
                        new
                        {
                            CustomerId = 1,
                            CustomerEmail = "Sample@customer.com",
                            CustomerFirstName = "Sample",
                            CustomerFullName = "Sample Customer",
                            CustomerLastName = "Customer",
                            CustomerPhoneNumber = "0925",
                            CustomerSpent = 0
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

                    b.Property<string>("Profile")
                        .HasColumnType("text");

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
                            LastLogin = new DateTime(2022, 8, 11, 13, 45, 57, 8, DateTimeKind.Utc).AddTicks(6601),
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

                    b.Property<float>("BunchTotal")
                        .HasColumnType("real");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductUnitCost")
                        .HasColumnType("integer");

                    b.Property<int>("ProductUnitPrice")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<int>("TransactionId")
                        .HasColumnType("integer");

                    b.Property<bool>("WithVat")
                        .HasColumnType("boolean");

                    b.HasKey("OrderedProductId");

                    b.HasIndex("ProductId");

                    b.HasIndex("TransactionId");

                    b.ToTable("OrderedProducts");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Payment", b =>
                {
                    b.Property<int>("PaymentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("PaymentId"));

                    b.Property<float>("Amount")
                        .HasColumnType("real");

                    b.Property<float>("Change")
                        .HasColumnType("real");

                    b.Property<int>("PaymentType")
                        .HasColumnType("integer");

                    b.Property<float>("Tendered")
                        .HasColumnType("real");

                    b.Property<int>("TransactionId")
                        .HasColumnType("integer");

                    b.HasKey("PaymentId");

                    b.HasIndex("TransactionId");

                    b.ToTable("Payments");
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

                    b.Property<int>("ProductQuantity")
                        .HasColumnType("integer");

                    b.Property<string>("ProductType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductUnitCost")
                        .HasColumnType("integer");

                    b.Property<int>("ProductUnitPrice")
                        .HasColumnType("integer");

                    b.Property<bool>("WithVat")
                        .HasColumnType("boolean");

                    b.HasKey("ProductId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            ProductId = 1,
                            ProductBarcode = "00001",
                            ProductManufacturer = "Zolu",
                            ProductName = "Sample Product",
                            ProductQuantity = 10,
                            ProductType = "Sample",
                            ProductUnitCost = 5,
                            ProductUnitPrice = 10,
                            WithVat = true
                        },
                        new
                        {
                            ProductId = 2,
                            ProductBarcode = "00001",
                            ProductManufacturer = "Zolu",
                            ProductName = "Sample Product With Out Vat",
                            ProductQuantity = 10,
                            ProductType = "Sample",
                            ProductUnitCost = 5,
                            ProductUnitPrice = 10,
                            WithVat = false
                        });
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.Property<int>("TransactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TransactionId"));

                    b.Property<int?>("CustomerId")
                        .HasColumnType("integer");

                    b.Property<int>("Discount")
                        .HasColumnType("integer");

                    b.Property<Guid>("Reference")
                        .HasColumnType("uuid");

                    b.Property<float>("SubTotal")
                        .HasColumnType("real");

                    b.Property<float>("Total")
                        .HasColumnType("real");

                    b.Property<DateTime>("TransactedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<float>("Vat")
                        .HasColumnType("real");

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

            modelBuilder.Entity("Zolupos.Application.Entities.Payment", b =>
                {
                    b.HasOne("Zolupos.Application.Entities.Transaction", "Transaction")
                        .WithMany("Payments")
                        .HasForeignKey("TransactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Transaction");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.HasOne("Zolupos.Application.Entities.Customer", "TransactionCustomer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.Navigation("TransactionCustomer");
                });

            modelBuilder.Entity("Zolupos.Application.Entities.Transaction", b =>
                {
                    b.Navigation("OrderedProducts");

                    b.Navigation("Payments");
                });
#pragma warning restore 612, 618
        }
    }
}
