import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  };

  return (
    <li className={styles.friendListItem}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} style={{backgroundColor: generateRandomColor()}} src={avatar} alt={`Avatar of ${name}`} />
        <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
