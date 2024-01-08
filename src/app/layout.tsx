import { Inter } from 'next/font/google';
import './globals.css';

import { Sidebar } from '../components/sidebar';
import { contacts } from '../data/contacts';
import { CardsChat } from '@/components/chat';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="h-screen">
          <div className="h-full">
            <div className="border-t h-screen">
              <div className="bg-background h-full">
                <div className="grid lg:grid-cols-5 h-full">
                  <Sidebar
                    contacts={contacts}
                    className="h-full w-screen lg:w-full"
                  />
                  <div className="col-span-3 lg:col-span-4 lg:border-l h-full">
                    <div className="h-full px-4 py-3 lg:px-4">
                      {children}
                      {/* <CardsChat /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
