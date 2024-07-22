import IconDropdownMenu from './icon-dropdown-menu';
import SignInIcon from './signin-icon';
import { auth } from '@/auth';
import UserProfileDropdown from './dropdowns/user-profile-dropdown';
import { Suspense } from 'react';

export default async function ProfileIcon() {
  const session = await auth();

  if (!session || !session.user) {
    return <SignInIcon />;
  }

  return (
    <Suspense>
      <IconDropdownMenu iconName="IoPersonOutline" iconTitle="User profile">
        <UserProfileDropdown />
      </IconDropdownMenu>
    </Suspense>
  );
}
