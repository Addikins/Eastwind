using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Eastwind.Models;

namespace Eastwind.Controllers
{
    [Route("api/[controller]")]
    public class SuppliersController : Controller
    {
        [HttpGet]
        public IEnumerable<Supplier> Suppliers()
        {
            var random = new Random();
            return Enumerable.Range(1, 5).Select(index => new Supplier
            {
                Id = index,
                Name = $"Supplier {index}"
            });
        }
        [HttpGet("{id}")]
        public Supplier Supplier(long id)
        {
            var random = new Random();
            return new Supplier
            {
                Id = id,
                Name = $"Supplier: {id}",
                Description = $"Placeholder text for this Supplier's ({id}) description"
            };
        }
    }
}
