using Gifter.Controllers;
using Gifter.Models;
using Gifter.Tests.Mocks;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Gifter.Tests
{
    public class PostControllerTests
    {
        [Fact]
        public void Get_Returns_All_Posts()
        {
            // Arrange 
                // In the arrange section we create any objects that are needed for the test.
                // In our example we create some test Posts, a mock repository and an instance of the PostController class. So here, postCount = 20 is testing if we can create 20 posts (or however many you choose). CreateTestPosts method is down lower in the code and creates a list.
            var postCount = 20;
            var posts = CreateTestPosts(postCount);
                
            var repo = new InMemoryPostRepository(posts); // InMemoryPostRepository is a mock repository
            var controller = new PostController(repo);

            // Act 
                // In the act section we execute the method that is being testing.
                // In our example we call the PostController.Get() method.
            var result = controller.Get();

            // Assert
                // In the assert section we verify that the method we're testing did what we expected it to do. We usually use the Assert utility class (provided by xUnit) to help.
                // In the example we verify the result of Get() method is an instance of the OkObjectResult class - this is the type returned by the Ok() method - and then we verify that it contains the expected list of posts.
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualPosts = Assert.IsType<List<Post>>(okResult.Value);

            Assert.Equal(postCount, actualPosts.Count);
            Assert.Equal(posts, actualPosts);
        }

        [Fact]
        public void Get_By_Id_Returns_NotFound_When_Given_Unknown_id()
        {
            // Arrange 
            var posts = new List<Post>(); // no posts

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            // Act
            var result = controller.Get(1);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public void Get_By_Id_Returns_Post_With_Given_Id()
        {
            // Arrange
            var testPostId = 99;
            var posts = CreateTestPosts(5);
            posts[0].Id = testPostId; // Make sure we know the Id of one of the posts

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            // Act
            var result = controller.Get(testPostId);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualPost = Assert.IsType<Post>(okResult.Value);

            Assert.Equal(testPostId, actualPost.Id);
        }

        [Fact]
        public void Post_Method_Adds_A_New_Post()
        {
            // Arrange 
            var postCount = 20;
            var posts = CreateTestPosts(postCount);

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            // Act
            var newPost = new Post()
            {
                Caption = "Caption",
                Title = "Title",
                ImageUrl = "http://post.image.url/",
                DateCreated = DateTime.Today,
                UserProfileId = 999,
                UserProfile = CreateTestUserProfile(999),
            };

            controller.Post(newPost);

            // Assert
            Assert.Equal(postCount + 1, repo.InternalData.Count);
        }

        [Fact]
        public void Put_Method_Returns_BadRequest_When_Ids_Do_Not_Match()
        {
            // Arrange
            var testPostId = 99;
            var posts = CreateTestPosts(5);
            posts[0].Id = testPostId; // Make sure we know the Id of one of the posts

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            var postToUpdate = new Post()
            {
                Id = testPostId,
                Caption = "Updated!",
                Title = "Updated!",
                UserProfileId = 99,
                DateCreated = DateTime.Today,
                ImageUrl = "http://some.image.url",
            };
            var someOtherPostId = testPostId + 1; // make sure they aren't the same

            // Act
            var result = controller.Put(someOtherPostId, postToUpdate);

            // Assert
            Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public void Put_Method_Updates_A_Post()
        {
            // Arrange
            var testPostId = 99;
            var posts = CreateTestPosts(5);
            posts[0].Id = testPostId; // Make sure we know the Id of one of the posts

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            var postToUpdate = new Post()
            {
                Id = testPostId,
                Caption = "Updated!",
                Title = "Updated!",
                UserProfileId = 99,
                DateCreated = DateTime.Today,
                ImageUrl = "http://some.image.url",
            };

            // Act
            controller.Put(testPostId, postToUpdate);

            // Assert
            var postFromDb = repo.InternalData.FirstOrDefault(p => p.Id == testPostId);
            Assert.NotNull(postFromDb);

            Assert.Equal(postToUpdate.Caption, postFromDb.Caption);
            Assert.Equal(postToUpdate.Title, postFromDb.Title);
            Assert.Equal(postToUpdate.UserProfileId, postFromDb.UserProfileId);
            Assert.Equal(postToUpdate.DateCreated, postFromDb.DateCreated);
            Assert.Equal(postToUpdate.ImageUrl, postFromDb.ImageUrl);
        }

        [Fact]
        public void Delete_Method_Removes_A_Post()
        {
            // Arrange
            var testPostId = 99;
            var posts = CreateTestPosts(5);
            posts[0].Id = testPostId; // Make sure we know the Id of one of the posts

            var repo = new InMemoryPostRepository(posts);
            var controller = new PostController(repo);

            // Act
            controller.Delete(testPostId);

            // Assert
            var postFromDb = repo.InternalData.FirstOrDefault(p => p.Id == testPostId);
            Assert.Null(postFromDb);
        }

        private List<Post> CreateTestPosts(int count)
        {
            var posts = new List<Post>();
            for (var i = 1; i <= count; i++)
            {
                posts.Add(new Post()
                {
                    Id = i,
                    Caption = $"Caption {i}",
                    Title = $"Title {i}",
                    ImageUrl = $"http://post.image.url/{i}",
                    DateCreated = DateTime.Today.AddDays(-i),
                    UserProfileId = i,
                    UserProfile = CreateTestUserProfile(i),
                });
            }
            return posts;
        }

        private UserProfile CreateTestUserProfile(int id)
        {
            return new UserProfile()
            {
                Id = id,
                Name = $"User {id}",
                Email = $"user{id}@example.com",
                Bio = $"Bio {id}",
                DateCreated = DateTime.Today.AddDays(-id),
                ImageUrl = $"http://user.image.url/{id}",
            };
        }

        //Example code for a basic test:
        //[Fact]
        //public void Two_Numbers_Should_Equal()
        //{
        //    var num1 = 100;
        //    var num2 = 100;

        //    Assert.Equal(num1, num2);
        //}
    }
}