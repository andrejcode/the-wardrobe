import IconDropdownMenu from './icon-dropdown-menu';
import SignInIcon from './signin-icon';
import UserProfileDropdown from './dropdowns/user-profile-dropdown';
import { Suspense } from 'react';
import { Session } from 'next-auth';

export default async function ProfileIcon({
  session,
}: {
  session: Session | null;
}) {
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
