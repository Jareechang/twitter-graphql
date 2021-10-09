import * as React from 'react'

import { ContentLayout } from '@app/client/components';

interface ProfileContentProps {}

const Profile: React.FC<ProfileContentProps> = (
  props
) => {
  return (
    <ContentLayout>
      <h3>This is Profile</h3>
    </ContentLayout>
  )
}

export default Profile;
