/*
  # Create storage policies for manuscripts bucket

  1. Storage Policies
    - Enable storage for manuscripts bucket
    - Add policies for authenticated users to:
      - Upload files to their own directory
      - Read their own files
      - Delete their own files
*/

-- Create storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name)
VALUES ('manuscripts', 'manuscripts')
ON CONFLICT (id) DO NOTHING;

-- Set bucket to private
UPDATE storage.buckets
SET public = false
WHERE id = 'manuscripts';

-- Allow authenticated users to upload files to their own directory
CREATE POLICY "Users can upload their own manuscripts"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'manuscripts' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to read their own files
CREATE POLICY "Users can view their own manuscripts"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'manuscripts' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to update their own files
CREATE POLICY "Users can update their own manuscripts"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'manuscripts' AND
  (storage.foldername(name))[1] = auth.uid()::text
)
WITH CHECK (
  bucket_id = 'manuscripts' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow users to delete their own files
CREATE POLICY "Users can delete their own manuscripts"
ON storage.objects FOR DELETE TO authenticated
USING (
);