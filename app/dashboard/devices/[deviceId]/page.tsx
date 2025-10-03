import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import NFCDeviceDetails from './_components/NFCDeviceDetails';

interface DevicePageProps {
  params: Promise<{
    deviceId: string;
  }>;
}

export default async function DevicePage({ params }: DevicePageProps) {
  const { userId } = await auth();

  // If user is not authenticated, redirect to pricing page
  if (!userId) {
    redirect('/pricing');
  }

  const { deviceId } = await params;
  return <NFCDeviceDetails deviceId={deviceId} />;
}
