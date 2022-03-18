using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class UserProfile
    {
        public UserProfile()
        {
            DateCreated = DateTime.Now;
        }
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }
        public string? Bio { get; set; }

        public string ImageUrl { get; set; }

        public DateTime DateCreated { get; set; }
        public List<Post> Posts { get; set; }



    }
}
