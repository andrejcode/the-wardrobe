import IconDropdownMenu from './icon-dropdown-menu';
import SignInIcon from './signin-icon';
import UserProfileDropdown from './dropdowns/user-profile-dropdown';
import { Suspense } from 'react';
import { Session } from 'next-auth';

interface ProfileIconProps {
  session: Session | null;
}

export default async function ProfileIcon({ session }: ProfileIconProps) {
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
