import React, { useEffect, useState } from "react";
import "./IndustryPosts.css";

const IndustryPosts = ({ onlyMine = false }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    const saved = JSON.parse(localStorage.getItem("opportunities") || "[]");
    const company = localStorage.getItem("companyName") || localStorage.getItem("userName") || "Demo Company";
    setPosts(onlyMine ? saved.filter((post) => post.postedBy === company) : saved);
  };

  useEffect(() => {
    loadPosts();
  }, [onlyMine]);

  const deletePost = (id) => {
    if (!window.confirm("Delete this opportunity?")) return;

    const saved = JSON.parse(localStorage.getItem("opportunities") || "[]");
    const updated = saved.filter((post) => post.id !== id);
    localStorage.setItem("opportunities", JSON.stringify(updated));
    setPosts((previous) => previous.filter((post) => post.id !== id));
  };

  return (
    <div id="industry-posts" className="industry-posts">
      <div id="industry-posts-heading" className="component-heading">
        <h3 id="industry-posts-title">{onlyMine ? "My Posted Opportunities" : "All Opportunities"}</h3>
        <p id="industry-posts-description">Review opportunities stored in this browser.</p>
      </div>

      {posts.length === 0 ? (
        <p id="industry-posts-empty" className="empty-state">No opportunities found.</p>
      ) : (
        <div id="industry-posts-list" className="industry-posts-list">
          {posts.map((post) => (
            <article id={`industry-post-${post.id}`} className="industry-post-card" key={post.id}>
              <div>
                <span className="industry-post-type">OPPORTUNITY</span>
                <h4>{post.title}</h4>
                <p>{post.desc || post.description}</p>
                <small>Skills: {(post.skills || []).join(", ") || "Not specified"}</small>
                <small>Posted by: {post.postedBy}</small>
              </div>

              {onlyMine && (
                <button
                  id={`industry-post-delete-${post.id}`}
                  className="industry-post-delete"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default IndustryPosts;
