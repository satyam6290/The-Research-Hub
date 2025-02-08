import { supabase } from './supabase';

interface ManuscriptMetadata {
  title?: string;
  abstract?: string;
}

interface UploadError extends Error {
  code?: string;
  details?: string;
}

export async function uploadManuscript(file: File, articleType: string): Promise<{
  metadata: ManuscriptMetadata;
  filePath: string;
}> {
  try {
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError) {
      throw new Error(`Authentication error: ${authError.message}`);
    }
    if (!user) {
      throw new Error('User must be authenticated to upload manuscripts');
    }

    // Validate file
    if (!file) {
      throw new Error('No file provided');
}