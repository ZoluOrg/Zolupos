﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Zolupos.Modules.Transaction.Infrustructure.Contexts;

#nullable disable

namespace Zolupos.Modules.Transaction.Infrustructure.Migrations
{
    [DbContext(typeof(TransactionDbContext))]
    [Migration("20220311105922_Intial")]
    partial class Intial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Zolupos.Modules.Transaction.Core.Entity.OrderedProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Product")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ProductId")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<bool>("Returned")
                        .HasColumnType("boolean");

                    b.Property<int>("TransactionId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("TransactionId");

                    b.ToTable("OrderedProducts");
                });

            modelBuilder.Entity("Zolupos.Modules.Transaction.Core.Entity.UserTransaction", b =>
                {
                    b.Property<int>("TransactionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("TransactionId"));

                    b.Property<DateTime>("Date")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp with time zone")
                        .HasDefaultValueSql("getdate()");

                    b.HasKey("TransactionId");

                    b.ToTable("UserTransactions");
                });

            modelBuilder.Entity("Zolupos.Modules.Transaction.Core.Entity.OrderedProduct", b =>
                {
                    b.HasOne("Zolupos.Modules.Transaction.Core.Entity.UserTransaction", "UserTransaction")
                        .WithMany("OrderedProducts")
                        .HasForeignKey("TransactionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserTransaction");
                });

            modelBuilder.Entity("Zolupos.Modules.Transaction.Core.Entity.UserTransaction", b =>
                {
                    b.Navigation("OrderedProducts");
                });
#pragma warning restore 612, 618
        }
    }
}
