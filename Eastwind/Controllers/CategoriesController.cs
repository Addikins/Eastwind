using System;
using System.Collections.Generic;
using System.Linq;
using Eastwind.Models;
using Microsoft.AspNetCore.Mvc;

namespace Eastwind.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        [HttpGet]
        public IEnumerable<Category> Categories()
        {
            var random = new Random();
            return Enumerable.Range(1, 5).Select(index => new Category
            {
                Id = index,
                Name = $"Category {index}"
            });
        }

        [HttpGet("{id}")]
        public Category Category(long id)
        {
            var random = new Random();
            return new Category
            {
                Id = id,
                Name = $"Category: {id}",
                Description = $"Placeholder for the description of the category {id}"
            };
        }
    }
}
