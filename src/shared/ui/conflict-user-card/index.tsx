import classnames from 'classnames';

import { Avatar } from '../avatar';

import styles from './styles.module.css';
import { PhoneIcon } from '../icons/phone-icon';
import { EmptyMessageIcon } from '../icons/empty-message-icon';
import { SquareButton } from '../square-buttons';

interface IConflictUserCardProps {
  role: string;
  extClassName?: string;
  avatarLink: string;
  avatarName: string;
  userName: string;
  userId: number;
  isMobile: boolean;
}

export const ConflictUserCard = ({
  role,
  extClassName,
  avatarLink,
  avatarName,
  userName,
  userId,
  isMobile,
}: IConflictUserCardProps) => (
  <>
    <div className={classnames(styles.content, extClassName)}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p
            className={classnames(
              'text',
              'text_size_small',
              'text_type_bold',
              styles.role
            )}
          >
            {role}
          </p>
          {isMobile ? (
            <SquareButton
              buttonType={role === 'Волонтер' ? 'confirm' : 'exclamation'}
            />
          ) : undefined}
        </div>
        <>
          <div className={classnames(styles.container)}>
            <div className={styles.user}>
              <Avatar
                avatarLink={avatarLink}
                avatarName={avatarName}
                extClassName={classnames(styles.avatar)}
              />
              <div className={classnames(styles.icons)}>
                <div className={classnames(styles.icon)}>
                  <PhoneIcon color={'white'} size={'22'} />
                </div>
                <div className={classnames(styles.icon)}>
                  <EmptyMessageIcon color={'white'} size={'22'} />
                </div>
              </div>
            </div>
          </div>
          {isMobile ? undefined : (
            <SquareButton
              buttonType={role === 'Волонтер' ? 'confirm' : 'exclamation'}
            />
          )}
        </>
      </div>
      <p
        className={classnames(
          'text',
          isMobile ? 'text_size_small' : 'text_size_medium',
          styles.name
        )}
      >
        {userName}
      </p>
      <p
        className={classnames(
          'text',
          isMobile ? 'text_size_micro' : 'text_size_small',
          styles.id
        )}
      >{`ID ${userId}`}</p>
    </div>
  </>
);