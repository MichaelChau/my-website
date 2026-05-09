import supabase from './db';

export default async function handler(req, res) {
  const { content } = req.body;

  const { data, error } = await supabase
    .from('messages')
    .insert([{ content }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
}