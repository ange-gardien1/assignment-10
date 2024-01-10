using task_backend.Migrations;
using task_backend.Models;

namespace task_backend.Repositories;

public class TaskRepository : ITaskRepositories
{
    private readonly TaskDbContext _context;
    public TaskRepository(TaskDbContext context)
    {
        _context = context;
    }

    public task CreateTask(task newTask)
    {
        _context.task.Add(newTask);
        _context.SaveChanges();
        return newTask;
    }

    public void DeleteTaskById(int TaskId)
    {
        var task = _context.task.Find(TaskId);
        if(task != null)
        {
            _context.task.Remove(task);
            _context.SaveChanges();
        }
    }

    public IEnumerable<task> GetAllTasks()
    {
       return _context.task.ToList();
    }

    public task GetTaskById(int TaskId)
    {
       return _context.task.SingleOrDefault(c => c.TaskId == TaskId);
    }

    public task UpdateTask(task newTask)
    {
        var currentTask = _context.task.Find(newTask.TaskId);
        if (currentTask != null)
        {
            currentTask.Title = newTask.Title;
            currentTask.completed = newTask.completed;
            _context.SaveChanges();
        }
        return currentTask;
    }
}