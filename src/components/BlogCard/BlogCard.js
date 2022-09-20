import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, authors: { name }, subtitle, text, image }) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="author">By <span>{name}</span></div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
