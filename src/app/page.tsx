import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat Realtime',
  description: 'Example music app using the components.',
};

export default function MusicPage() {
  return (
    <div className="hidden lg:block h-full">
      <div className="h-full flex items-center justify-center">
        <p className="text-4xl font-semibold text-gray-600">
          Inicie uma conversa
        </p>
      </div>
    </div>
  );
}
