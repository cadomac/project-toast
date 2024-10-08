import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import {ToastContext} from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [currentVariant, setCurrentVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { addToast, handleDismissAll } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    addToast({ id: crypto.randomUUID(), message, variant: currentVariant })
    setMessage('')
    setCurrentVariant(VARIANT_OPTIONS[0])
  }

  useEscapeKey(handleDismissAll)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
        <ToastShelf />
        <form onSubmit={(e) => handleSubmit(e)} className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {
                VARIANT_OPTIONS.map((variant) => (
                  <label key={variant} htmlFor={`variant-${variant}`}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={currentVariant === variant}
                      onChange={(e) => e.target.checked && setCurrentVariant(variant)}
                    />
                    {variant}
                  </label>
                ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
    </div>
  );
}

export default ToastPlayground;
