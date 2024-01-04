import { Metadata } from 'next';
import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Menu } from '../components/menu';
import { Sidebar } from '../components/sidebar';
import { playlists } from '../data/playlists';
import { CardsChat } from '@/components/chat';

export const metadata: Metadata = {
  title: 'Chat Realtime',
  description: 'Example music app using the components.',
};

export default function MusicPage() {
  return (
    // <>
    <div className="h-screen">
      <div className="hidden md:block">
        <Menu />
        <div className="border-t h-full">
          <div className="bg-background h-full">
            <div className="grid lg:grid-cols-5 h-full">
              <Sidebar
                playlists={playlists}
                className="hidden lg:block h-full"
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l h-full">
                <div className="h-full px-4 py-6 lg:px-8">
                  <CardsChat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
