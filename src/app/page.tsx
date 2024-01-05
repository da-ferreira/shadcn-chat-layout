import { Metadata } from 'next';
import Image from 'next/image';
import { PlusCircledIcon } from '@radix-ui/react-icons';

import { Sidebar } from '../components/sidebar';
import { contacts } from '../data/contacts';
import { CardsChat } from '@/components/chat';

export const metadata: Metadata = {
  title: 'Chat Realtime',
  description: 'Example music app using the components.',
};

export default function MusicPage() {
  return (
    <div className="h-screen">
      <div className="h-full">
        
        <div className="border-t h-screen">
          <div className="bg-background h-full">
            
            <div className="grid lg:grid-cols-5 h-full">
              <Sidebar
                contacts={contacts}
                className="hidden lg:block h-full"
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l h-full">
                <div className="h-full px-4 py-3 lg:px-4">
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
