'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { NoiseBackground } from '../ui/noise-background';
import { Button } from '../ui/moving-border';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('contact_messages')
      .insert([form]);

    if (!error) {
      alert('Message sent ✅');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Error sending message ❌');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md w-full">
      <NoiseBackground containerClassName="rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full rounded-2xl shadow-xl p-8 backdrop-blur-md border border-border bg-[#0a1128]/95 dark:bg-[#0a1128]/95"
        >
          <h3 className="text-2xl font-bold text-center mb-2 text-white">Contact Me</h3>
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-border bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder-gray-400 text-white"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-border bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-primary transition placeholder-gray-400 text-white"
          />
          <textarea
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-transparent p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary transition placeholder-gray-400 text-white"
          />
          <Button
            borderRadius="0rem" 
            type="submit"
            style={{ width: '100%' }}
            disabled={loading}
            duration={5000}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </NoiseBackground>
    </div>
  );
}
