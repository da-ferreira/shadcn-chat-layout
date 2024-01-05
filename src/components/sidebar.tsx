import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu } from '../components/menu';
import { Contact } from '../data/contacts';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  contacts: Contact[];
}

export function Sidebar({ className, contacts }: SidebarProps) {
  return (
    <div className={cn(className, 'h-full')}>
      <Menu />

      <div className="space-y-2 py-2 h-[calc(100vh-6.6rem)] w-full shrink-0 md:sticky md:block">
        <div className="px-4">
          <Input placeholder="Filtrar chats..." />
        </div>

        <ScrollArea className="h-full !mt-2">
          <div className="space-y-1 px-2">
            {contacts?.map((contact, i) => (
              <Button
                key={`${contact}-${i}`}
                variant="ghost"
                className="w-full justify-start font-normal flex flex-row items-center h-14 border-b border-gray-200 rounded-none"
              >
                <div className="flex items-center space-x-4 w-full">
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt="Image" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="w-full text-start ">
                    <p className="text-sm font-medium">{contact.name}</p>

                    <p className="text-sm text-muted-foreground overflow-hidden line-clamp-1">
                      {contact.lastMessage}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
