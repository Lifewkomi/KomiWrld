import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your_project_id',
  dataset: 'your_dataset_name',
  apiVersion: '2023-01-01', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;