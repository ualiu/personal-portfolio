// Sample blog posts data
const blogPosts = {
  1: {
    title: "GROW YOUR TRAFFIC CHEAT SHEET",
    date: "February 22, 2025",
    image: "assets/images/traffic-cheatsheet.jpg", // Update to a real image or keep default
    content: `
          <p>Grow your traffic through word of mouth and customer loyalty:</p>
          <ul>
              <li><strong>1.</strong> Have a core business that you are known for. It is very hard to be known for 10 different things. Create a clear brand and positioning around that core business.</li>
              <li><strong>2.</strong> Obsess over the quality of your product or service. Establish an impeccable reputation and create loyal customers. No marketing can fix a bad product.</li>
              <li><strong>3.</strong> Invite customers to tell others about you and leave a review.</li>
          </ul>
      `,
  },
};

// Function to load the blog post
function loadBlogPost() {
  // Get blog post ID from URL
  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get("id")); // Convert to number

  console.log("Requested Blog ID:", postId); // Debugging step

  // Check if the blog post exists
  if (blogPosts[postId]) {
    document.getElementById("post-title").innerText = blogPosts[postId].title;
    document.getElementById(
      "post-date"
    ).innerHTML = `Published on: <span>${blogPosts[postId].date}</span>`;
    document.getElementById("post-image").src =
      blogPosts[postId].image || "assets/images/default.jpg";
    document.getElementById("post-content").innerHTML =
      blogPosts[postId].content;
  } else {
    console.error("Blog post not found for ID:", postId);
    document.getElementById("post-title").innerText = "Blog Not Found";
    document.getElementById("post-content").innerHTML =
      "<p>Sorry, this blog post does not exist.</p>";
    document.getElementById("post-image").style.display = "none"; // Hide image if not found
  }
}

// Load the blog post on page load
document.addEventListener("DOMContentLoaded", loadBlogPost);
