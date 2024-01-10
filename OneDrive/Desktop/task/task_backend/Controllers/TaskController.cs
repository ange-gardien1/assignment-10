using Microsoft.AspNetCore.Mvc;
using task_backend.Models;
using task_backend.Repositories;

namespace task_backend.Controllers;
[ApiController]
[Route("Task")]
public class TaskController : ControllerBase
{
    private readonly ILogger<TaskController> _logger;
    private readonly ITaskRepositories _TaskRepository;

    public TaskController(ILogger<TaskController> logger, ITaskRepositories repositories)
    {
        _logger = logger;
        _TaskRepository = repositories;

    }

    [HttpGet]
    public ActionResult<IEnumerable<Task>> GetAllTasks()
    {
        return Ok(_TaskRepository.GetAllTasks());
    }

    [HttpGet]
    [Route("{TaskId: int}")]
    public ActionResult<Task> GetTaskById(int TaskId)
    {
        var task = _TaskRepository.GetTaskById(TaskId);
        if (task == null)
        {
            return NotFound();
        }
        return Ok(task);
    }
    [HttpPost]
    public ActionResult<task> CreateTask(task task)
    {
        if(!ModelState.IsValid || task == null)
        {
            return BadRequest();
        }
        var newTask = _TaskRepository.CreateTask(task);
        return Created(nameof(GetTaskById), newTask);
    }

    [HttpPut]
    [Route("{taskId : int}")]

    public ActionResult<task> UpdateTask(task task)
    {
          if(!ModelState.IsValid || task == null)
        {
            return BadRequest();
        }

        return Ok(_TaskRepository.UpdateTask(task));
    }
    
    [HttpDelete]
    [Route("{taskId : int}")]

    public ActionResult DeleteTask (int TaskId)
{
    _TaskRepository.DeleteTaskById(TaskId);
    return NoContent();
}
    }