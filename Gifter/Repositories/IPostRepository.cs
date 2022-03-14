using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        void Update(Post post);
        List<Post> GetAll();
        List<Post> GetAllWithComments();
        Post GetById(int id);
        Post GetPostIdWithComments(int id);
        List<Post> Search(string q, bool sortDesc);
        List<Post> SearchByDate(DateTime since);
    }
}