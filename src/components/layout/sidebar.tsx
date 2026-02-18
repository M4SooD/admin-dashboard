'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Command,
  CreditCard,
  LayoutDashboard,
  Settings,
  User,
} from 'lucide-react';

import { cn } from '@/lib/utils';

type MenuItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Transactions', href: '/transactions', icon: CreditCard },
  { title: 'Customers', href: '/customers', icon: User },
  { title: 'Settings', href: '/settings', icon: Settings },
];
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-64 border-r bg-zinc-950 text-white flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800 gap-2">
        <Command className="h-7 w-7 text-blue-500" />

        <span className="text-xl font-bold tracking-tight">Nexus Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-md transition-colors',
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white',
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <p className="text-xs text-zinc-500">v1.0.0 (Enterprise Edition)</p>
      </div>
    </aside>
  );
}
