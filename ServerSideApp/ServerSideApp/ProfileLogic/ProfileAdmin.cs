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
        public void AddProfile(Profile profile)
        {
            if (profiles.Any())
                profile.Id = profiles.Count + 1;
            else
                profile.Id = 1;
             profiles.Add(profile);
        }
        public List<Profile> GetAll() => profiles;
        public Profile GetProfile(int id) => profiles.FirstOrDefault(p => p.Id == id);
        public Profile GetProfileByName(string name) => profiles.FirstOrDefault(p => p.FirstName == name);
        public void UpdateProfile(Profile profile)
        {
            var currentProfile = GetProfile(profile.Id);
            currentProfile.FirstName = profile.FirstName;
            currentProfile.LastName = profile.LastName;
            currentProfile.Age = profile.Age;
        }
        public void DeleteProfile(int id) => profiles.RemoveAll(p => p.Id == id);

    }
}
