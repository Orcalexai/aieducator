// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Agentic AI",
    description: "AI without Agentic, its like bringing a knife to a gun fight",
    image: "/blog/1740802037671.jpeg",
    slug: "Agentic-AI",
    date: "February 18, 2025",
    content: "Full blog post content here..."
  },
  {
    id: 2,
    title: "NVIDIA AI Summit",
    description: "Fine-Tuning the Future of AI.",
    image: "/blog/nvidia.jpeg",
    slug: "NVIDIA-AI-Summit",
    date: "December 19, 2024",
    content: "Full blog post content here..."
  },
  {
    id: 3,
    title: "SuperAI Singapore",
    description: "A Hub for AI & Generative AI Innovation.",
    image: "/blog/superai.jpeg",
    slug: "SuperAI-Singapore",
    date: "August 20, 2024",
    content: "Full blog post content here..."
  }
];

export async function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export async function getAllBlogPosts() {
  return blogPosts;
} 