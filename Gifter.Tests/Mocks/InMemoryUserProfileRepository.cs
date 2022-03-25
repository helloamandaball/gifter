using System;
using System.Collections.Generic;
using System.Linq;
using Gifter.Models;
using Gifter.Repositories;

namespace Gifter.Tests.Mocks
{
    class InMemoryUserProfileRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            // Instead of a SQL Server database, our mock repository stores data inside the _data list. Since the list is resides within our C# program, we say we're storing the data in memory.
            get
            {
                return _data;
            }
        }

        public InMemoryUserProfileRepository(List<UserProfile> startingData)
        {
            _data = startingData;
        }

        public void Add(UserProfile user)
        {
            var lastUser = _data.Last();
            user.Id = lastUser.Id + 1;
            _data.Add(user);
        }

        public void Delete(int id)
        {
            var userTodelete = _data.FirstOrDefault(u => u.Id == id);
            if (userTodelete == null)
            {
                return;
            }

            _data.Remove(userTodelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        public UserProfile GetById(int id)
        {
            return _data.FirstOrDefault(u => u.Id == id);
        }

        public void Update(UserProfile user)
        {
            var currentUser = _data.FirstOrDefault(u => u.Id == user.Id);
            if (currentUser == null)
            {
                return;
            }

            currentUser.Name = user.Name;
            currentUser.Email = user.Email;
            currentUser.DateCreated = user.DateCreated;
            currentUser.ImageUrl = user.ImageUrl;
            currentUser.Bio = user.Bio;
        }

        public UserProfile GetByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public UserProfile GetUserProfileIdWithPostsAndComments(int id)
        {
            throw new NotImplementedException();
        }
    }
}
