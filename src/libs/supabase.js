import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://nphxfzemdjhrsgherdbf.supabase.co";

const supabaseAnonKey =
  "sb_publishable_dRTtK2QBM0F0T-LvCT2taw_BfqHFBM9";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    }
  );