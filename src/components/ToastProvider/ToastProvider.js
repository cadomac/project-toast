import React from 'react';

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(id) {
    setToasts(toasts => toasts.filter(item => item.id !== id));
  }

  function handleDismissAll() {
    setToasts([]);
  }

  function addToast(toast) {
    setToasts(toasts => [...toasts, toast]);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, handleDismiss, handleDismissAll }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
