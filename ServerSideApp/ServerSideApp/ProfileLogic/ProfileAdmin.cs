using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideApp.ProfileLogic
{
    public class ProfileAdmin
    {
        private List<Profile> profiles { get; set; }
        public ProfileAdmin()
        {
            profiles = new List<Profile>();
        }
        public void AddProfile(Profile profile) => profiles.Add(profile);
        public List<Profile> GetAll() => profiles;

    }
}
