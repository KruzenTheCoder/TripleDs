import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iphzsuweruwkcbdhypxj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwaHpzdXdlcnV3a2NiZGh5cHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODkzNDUsImV4cCI6MjA4NTk2NTM0NX0.6DXOG2txIqZ1BwsLVMdOLAoGqnVnCai84qTVUm3ya9M';

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Testing connection...');
  const { data, error } = await supabase.from('menu_categories').select('*');
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success! Data:', data);
  }
}

test();
