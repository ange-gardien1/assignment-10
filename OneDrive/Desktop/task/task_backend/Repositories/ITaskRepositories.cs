using task_backend.Models;

namespace task_backend.Repositories;
public interface ITaskRepositories
{
    IEnumerable<task> GetAllTasks();
    task GetTaskById(int TaskId);
    task CreateTask(task newTask);
    task UpdateTask(task newTask);
    void DeleteTaskById(int TaskId);
}