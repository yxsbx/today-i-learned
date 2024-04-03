import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ulqtjccdkjvgonzkfali.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscXRqY2Nka2p2Z29uemtmYWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MzA0OTEsImV4cCI6MjAyNjMwNjQ5MX0.jCLdb8FmlbmQYuqnxO0MxLpR0GGZJsDkWO39TJpPPYw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
