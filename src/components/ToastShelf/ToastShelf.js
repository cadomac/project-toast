import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol role="region" aria-live="polite" aria-label="Notification" className={styles.wrapper}>
        {
          toasts && toasts.map((toast) => (
            <li key={toast.id} className={styles.toastWrapper}>
              <Toast id={toast.id} variant={toast.variant} message={toast.message} dismiss={() => handleDismiss(toast.id)} />
            </li>
          ))
        }
    </ol> 
  );
}

export default ToastShelf;
