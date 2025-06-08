import { useEffect } from 'react';
import { useRouter, useRootNavigationState } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
    if (!rootNavigation?.key) return; // Wait until navigation is ready
    router.replace('/SignUpScreen'); // Navigate safely
  }, [rootNavigation]);

  return null;
}
