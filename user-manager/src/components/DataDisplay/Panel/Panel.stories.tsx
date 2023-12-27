import type { Meta, StoryObj } from '@storybook/react';

// Components
import Panel from '@components/DataDisplay/Panel/index';
import ProfileEditor from '@components/DataDisplay/Panel/ProfileEditor';

// Helpers
import { getRandomColor } from '@helpers/getRandomColor';

export default {
  title: 'Components/Panel',
  component: Panel
} as Meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: {
    tabs: [
      {
        title: 'General',
        content: (
          <ProfileEditor
            id={1}
            avatar={''}
            fullName={'Username'}
            email={''}
            isActive={true}
            registeredDate={null}
            lastVisitedDate={null}
            details={''}
            bgColor={getRandomColor()}
            onSaveUser={() => {}}
            onDeleteUser={() => {}}
          />
        )
      }
    ]
  }
};
