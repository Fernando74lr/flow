export interface Expense {
  title: string;
  date: string;
  amount: number;
  payment_type: string;
  notes?: string;
  category?: string[];
  fixed?: boolean;
  created_at?: string;
  updated_at?: string;
}
