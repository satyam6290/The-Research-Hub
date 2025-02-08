/*
  # Create manuscripts table

  1. New Tables
    - `manuscripts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `title` (text)
      - `abstract` (text)
      - `file_path` (text)
      - `file_name` (text)
      - `file_size` (bigint)
      - `file_type` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `status` (text)
      - `article_type` (text)

  2. Security
    - Enable RLS on `manuscripts` table
    - Add policies for authenticated users to manage their own manuscripts
*/

CREATE TABLE IF NOT EXISTS manuscripts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  title text,
  abstract text,
  file_path text NOT NULL,
  file_name text NOT NULL,
  file_size bigint NOT NULL,
  file_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  status text DEFAULT 'draft',
  article_type text NOT NULL,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'submitted', 'under_review', 'accepted', 'rejected'))
);

-- Enable RLS
ALTER TABLE manuscripts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own manuscripts"
  ON manuscripts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own manuscripts"
  ON manuscripts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own manuscripts"
  ON manuscripts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);