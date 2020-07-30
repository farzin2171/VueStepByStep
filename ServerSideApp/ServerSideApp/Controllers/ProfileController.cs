using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerSideApp.ProfileLogic;

namespace ServerSideApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        ProfileAdmin _profileAdmin;
        public ProfileController(ProfileAdmin profileAdmin)
        {
            _profileAdmin = profileAdmin;
        }
        [HttpGet("{id}")]
        public Profile GetProfile(int id)
        {
            return new Profile
            {
                Id = id,
                FirstName = "ff",
                LastName = "fff",
                Age = 22
            };
        }

        public Profile CreateProfile(string name)
        {
            var profile= new Profile
            {
                
                FirstName = name,
                LastName = "fff",
                Age = 22
            };
            _profileAdmin.AddProfile(profile);
            return profile;
        }


    }
   
}