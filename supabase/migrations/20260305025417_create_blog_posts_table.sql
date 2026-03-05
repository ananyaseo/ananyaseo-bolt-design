/*
  # Create blog_posts table

  1. New Tables
    - `blog_posts`
      - `id` (bigserial, primary key)
      - `title` (text, blog post title)
      - `slug` (text, unique URL-friendly identifier)
      - `excerpt` (text, short preview text)
      - `content` (text, full blog post content)
      - `image_url` (text, featured image)
      - `published_date` (timestamp, publication date)
      - `created_at` (timestamp, creation timestamp)
      - `updated_at` (timestamp, last update timestamp)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access (anyone can view published posts)
    - Posts table is public for reading, no need for authentication
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  published_date timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE INDEX idx_blog_posts_published_date ON blog_posts(published_date DESC);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
