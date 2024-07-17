let editIndex = -1;

document.getElementById('createProfile').addEventListener('click', function() {
  document.getElementById('profileForm').style.display = 'block';
  editIndex = -1; // Reset edit index
});

document.getElementById('cancelProfile').addEventListener('click', function() {
  document.getElementById('profileForm').style.display = 'none';
  document.getElementById('profileForm').reset();
});

document.getElementById('saveProfile').addEventListener('click', function() {
  const profileName = document.getElementById('profileName').value;
  const firstName = document.getElementById('firstName').value;
  const middleName = document.getElementById('middleName').value;
  const lastName = document.getElementById('lastName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;

  if (profileName && firstName && lastName && phoneNumber && email) {
    chrome.storage.local.get({profiles: []}, function(result) {
      const profiles = result.profiles;
      const profileDetails = {firstName, middleName, lastName, phoneNumber, email};

      if (editIndex >= 0) {
        profiles[editIndex] = {profileName, details: profileDetails};
        editIndex = -1;
      } else {
        profiles.push({profileName, details: profileDetails});
      }

      chrome.storage.local.set({profiles: profiles}, function() {
        loadProfiles();
        document.getElementById('profileForm').reset();
        document.getElementById('profileForm').style.display = 'none';
      });
    });
  } else {
    alert('Please fill in all required fields.');
  }
});

function loadProfiles() {
  chrome.storage.local.get({profiles: []}, function(result) {
    const profilesList = document.getElementById('profilesList');
    profilesList.innerHTML = '';
    result.profiles.forEach((profile, index) => {
      const profileDiv = document.createElement('div');
      
      const profileButton = document.createElement('button');
      profileButton.textContent = profile.profileName;
      profileButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: fillForm,
            args: [profile.details]
          });
        });
      });
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        document.getElementById('profileForm').style.display = 'block';
        document.getElementById('profileName').value = profile.profileName;
        document.getElementById('firstName').value = profile.details.firstName;
        document.getElementById('middleName').value = profile.details.middleName;
        document.getElementById('lastName').value = profile.details.lastName;
        document.getElementById('phoneNumber').value = profile.details.phoneNumber;
        document.getElementById('email').value = profile.details.email;
        editIndex = index;
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        result.profiles.splice(index, 1);
        chrome.storage.local.set({profiles: result.profiles}, loadProfiles);
      });

      profileDiv.appendChild(profileButton);
      profileDiv.appendChild(editButton);
      profileDiv.appendChild(deleteButton);
      profilesList.appendChild(profileDiv);
    });
  });
}

function fillForm(details) {
  for (const key in details) {
    const element = document.querySelector(`[name="${key}"]`);
    if (element) {
      element.value = details[key];
    }
  }
}

loadProfiles();
