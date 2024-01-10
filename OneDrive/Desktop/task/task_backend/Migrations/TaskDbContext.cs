using Microsoft.EntityFrameworkCore;
using task_backend.Models;

namespace task_backend.Migrations;
public class TaskDbContext : DbContext
{
public DbSet<task> task {get; set;}
public TaskDbContext(DbContextOptions<TaskDbContext>options)
:base(options)
{

}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<task>(entity => {
            entity.HasKey(e=>e.TaskId);
            entity.Property(e => e.Title).IsRequired();
            entity.Property(e => e.Title).IsRequired();
            entity.Property(e => e.completed).IsRequired();
        });

        modelBuilder.Entity<task>().HasData(
            new task{
                TaskId = 1,
                Title = "greeting",
                completed = false
            },
            new task {
                TaskId = 2,
                Title = "go to school",
                completed = true
            }
        );
    }
}
