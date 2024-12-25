const users = [
  {
    profilePhoto: "https://cdn.prod.website-files.com/67179f863af8617d1dca068a/67179f863af8617d1dca078a_aiony-haust-3TLl_97HNJo-unsplash.webp",
    description: "Passionate traveler and food lover sharing unique experiences.",
    username: "wanderlust123",
    fullName: "Aarav Sharma",
    mediaUploadedCount: 120,
    followersCount: 4500,
    followingCount: 320,
    coverPhoto: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tech geek and gadget reviewer with honest opinions.",
    username: "techGuru",
    fullName: "Ishita Patel",
    mediaUploadedCount: 85,
    followersCount: 8700,
    followingCount: 250,
    coverPhoto: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fitness enthusiast inspiring a healthy lifestyle daily.",
    username: "fitLife",
    fullName: "Rohan Mehta",
    mediaUploadedCount: 150,
    followersCount: 12000,
    followingCount: 180,
    coverPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Artist showcasing creativity through vibrant artworks and sketches.",
    username: "artisticSoul",
    fullName: "Ananya Singh",
    mediaUploadedCount: 60,
    followersCount: 6000,
    followingCount: 300,
    coverPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Photographer capturing moments that tell captivating stories.",
    username: "lensMaster",
    fullName: "Kabir Das",
    mediaUploadedCount: 200,
    followersCount: 15000,
    followingCount: 400,
    coverPhoto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGenHzNQVAyQ3IVGP_Qux28r5m-gvKEhEQ-UJ7QP4OPX_WQzTb"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bookworm sharing reviews and literary adventures online.",
    username: "readersHaven",
    fullName: "Priya Kapoor",
    mediaUploadedCount: 40,
    followersCount: 3000,
    followingCount: 150,
    coverPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

let sum = ''
users.forEach(function(elem) {
  sum += `
  <div class="card">
      <div class="cover">
          <img src="${elem.coverPhoto}" alt="Cover Photo">
      </div>
      <div class="profile">
          <img src="${elem.profilePhoto}" alt="Profile Photo">
      </div>
      <h1>${elem.username}</h1>
      <h2>${elem.fullName}</h2>
      <p>${elem.description}</p>
      <div class="line"></div>
      <div class="social">
          <div>
              <h1>${elem.mediaUploadedCount}</h1>
              <h2>Media</h2>
          </div>
          <div>
              <h1>${elem.followersCount}</h1>
              <h2>Followers</h2>
          </div>
          <div>
              <h1>${elem.followingCount}</h1>
              <h2>Following</h2>
          </div>
      </div>
  </div>`;
});

const main = document.querySelector('.main');
main.innerHTML = sum;
