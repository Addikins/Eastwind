using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Eastwind.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public IEnumerable<Product> Products()
        {
            var random = new Random();
            return Enumerable.Range(1, 5).Select(index => new Product
            {
                Id = index,
                Name = $"Product {index}",
                Price = random.Next(10, 100),
                Quantity = random.Next(1, 10)
            });
        }

        [HttpGet("{id}")]
        public Product Product(long id)
        {
            var random = new Random();
            return new Product
            {
                Id = id,
                Name = $"Product: {id}",
                Price = random.Next(10, 100),
                Quantity = random.Next(10),
                Description = $"This is a placeholder for the description of product {id}"
            };
        }


    }
    public class Product
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }
}
