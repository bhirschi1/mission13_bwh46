using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission14.Data;

namespace mission14.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get() 
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
            return x;
        }
    }
}
