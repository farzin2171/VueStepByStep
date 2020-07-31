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
            profileAdmin.AddProfile(new Profile
            {
                Id = 1,
                FirstName = "dd",
                LastName = "dddd",
                Age = 45

            });
        }
        [HttpGet("")]
        public List<Profile> GetProfiles()
        {
            return _profileAdmin.GetAll();
        }

        [HttpGet("{name}")]
        public Profile GetProfile(string name)
        {
            return _profileAdmin.GetProfileByName(name);
        }
        [HttpPost]
        public Profile CreateProfile(Profile profile)
        {
            
            _profileAdmin.AddProfile(profile);
            return profile;
        }
        [HttpPut]
        public IActionResult UpdateProfile(Profile profile)
        {

            _profileAdmin.UpdateProfile(profile);
            return Ok();
        }
        [HttpDelete]
        public IActionResult DeleteProfile(int id)
        {
            _profileAdmin.DeleteProfile(id);
            return Ok();
        }





    }
   
}