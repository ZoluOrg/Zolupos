﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Zolupos.Modules.Transactions.Infrastructure.Context;

#nullable disable

namespace Zolupos.Modules.Transactions.Infrastructure.Migrations
{
    [DbContext(typeof(TransactionsContext))]
    [Migration("20220331010838_Migration 03-31-2022-09-07")]
    partial class Migration033120220907
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

                    b.ToTable("Product");
                });

            modelBuilder.Entity("Zolupos.Modules.Transactions.Core.Entities.OrderedItems", b =>
                {
                    b.Property<int>("OrderedItemsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("OrderedItemsId"));

                    b.Property<int>("ParentTransactionId")
                        .HasColumnType("integer");

                    b.Property<int>("ProductOrderedId")
                        .HasColumnType("integer");

                    b.HasKey("OrderedItemsId");

                    b.HasIndex("ParentTransactionId");

                    b.HasIndex("ProductOrderedId");

                    b.ToTable("OrderedItems");
                });

            modelBuilder.Entity("Zolupos.Modules.Transactions.Core.Entities.OrderTransactions", b =>
                {
                    b.Property<int>("OrderTransactionsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("OrderTransactionsId"));

                    b.Property<int>("Total")
                        .HasColumnType("integer");

                    b.Property<DateTime>("TransactedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("OrderTransactionsId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("Zolupos.Modules.Transactions.Core.Entities.OrderedItems", b =>
                {
                    b.HasOne("Zolupos.Modules.Transactions.Core.Entities.OrderTransactions", "ParentTransaction")
                        .WithMany("OrderedItems")
                        .HasForeignKey("ParentTransactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Zolupos.Modules.Inventory.Core.Entity.Product", "ProductOrdered")
                        .WithMany()
                        .HasForeignKey("ProductOrderedId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ParentTransaction");

                    b.Navigation("ProductOrdered");
                });

            modelBuilder.Entity("Zolupos.Modules.Transactions.Core.Entities.OrderTransactions", b =>
                {
                    b.Navigation("OrderedItems");
                });
#pragma warning restore 612, 618
        }
    }
}
