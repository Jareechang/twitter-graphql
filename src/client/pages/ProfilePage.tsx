import * as React from 'react'

import { ContentLayout } from '@app/client/components';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = (
  props
) => {
  return (
    <ContentLayout>
      <h3>This is ProfilePage</h3>
    </ContentLayout>
  )
}

export default ProfilePage;
