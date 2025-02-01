import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search, Cpu, Globe, Code, Zap, ArrowRight, Loader2 } from "lucide-react";
import Input from "../components/ui/input";
import { Button } from "../components/ui/Button";

const CATEGORIES = [
  { name: "All", color: "bg-gray-100 text-gray-700", icon: Search },
  { name: "AI & Machine Learning", color: "bg-purple-100 text-purple-700", icon: Cpu },
  { name: "Web Development", color: "bg-blue-100 text-blue-700", icon: Globe },
  { name: "Cybersecurity", color: "bg-red-100 text-red-700", icon: Code },
  { name: "Emerging Tech", color: "bg-green-100 text-green-700", icon: Zap },
];

export default function TechBlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://acm-react.onrender.com/api/blogs")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "All" || post.category === selectedCategory)
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      await axios.post("https://acm-react.onrender.com/api/subscribe", { email });
      setMessage("You have successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred while subscribing. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-200 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-10 w-full">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600">ACM</a>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 border-blue-600"
            />
            {/* <Button variant="outline" onClick={handleSubscribe}>
              Subscribe
            </Button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Explore the Latest in Tech</h1>
          <p className="text-xl mb-8">Stay informed with cutting-edge insights and trends</p>
          <Button variant="secondary" size="lg">
            Start Reading <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full ${category.color} ${
                selectedCategory === category.name ? "ring-2 ring-offset-2 ring-blue-500" : ""
              }`}
              onClick={() => handleCategoryChange(category.name)}
            >
              <category.icon className="w-4 h-4 inline-block mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          {selectedCategory === "All" ? "Latest Posts" : selectedCategory}
        </h2>

        {/* Blog Posts */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Loader2 className="animate-spin text-blue-600 w-8 h-8" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                onClick={() => navigate(`/blog/${post._id}`)}
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt="Blog Cover"
                    className="w-full h-64 object-contain rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                    <p className="text-sm text-gray-500">
                      By <span className="font-semibold">{post.author}</span>
                      <br />
                      {new Date(post.date).toLocaleDateString("in-IN")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
