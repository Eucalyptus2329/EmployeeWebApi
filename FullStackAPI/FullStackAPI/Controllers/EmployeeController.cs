using FullStackAPI.Controllers.Models;
using FullStackAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("/api/employees")]
    //or[Route("/api/[controller]")] automatically take name of controller, employees in (EmployeeController) and map it inside the route
    public class EmployeeController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        //constructor for controller - inject dbcontext from services container, assign to local variable
        public EmployeeController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployeee()
        {
            //fetch list of employees inside employees table from database, run async
            var employees = await _fullStackDbContext.Employees.ToListAsync();
            return Ok(employees); //pass with OK which is status 200 in REST
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDbContext.Employees.AddAsync(employeeRequest); //Adds new emplyee using DbContext
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FirstOrDefaultAsync(x => x.Id == id); //returns first element with x of id equaling id
            if(employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeRequest)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            
            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Salary = updateEmployeeRequest.Salary;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Department = updateEmployeeRequest.Department;
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Employees.Remove(employee);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
