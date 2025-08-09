import React from 'react';
import Toast, { BaseToast, ErrorToast, InfoToast, ToastConfig } from 'react-native-toast-message';

export const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#10B981',
        backgroundColor: '#F0FDF4',
        borderLeftWidth: 4,
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#065F46',
      }}
      text2Style={{
        fontSize: 14,
        color: '#047857',
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#EF4444',
        backgroundColor: '#FEF2F2',
        borderLeftWidth: 4,
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#991B1B',
      }}
      text2Style={{
        fontSize: 14,
        color: '#B91C1C',
      }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: '#3B82F6',
        backgroundColor: '#EFF6FF',
        borderLeftWidth: 4,
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#1E40AF',
      }}
      text2Style={{
        fontSize: 14,
        color: '#2563EB',
      }}
    />
  ),
  warning: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#F59E0B',
        backgroundColor: '#FFFBEB',
        borderLeftWidth: 4,
        borderRadius: 8,
        marginHorizontal: 16,
        marginTop: 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
        color: '#92400E',
      }}
      text2Style={{
        fontSize: 14,
        color: '#B45309',
      }}
    />
  ),
};

// Helper functions for easy toast usage
export const showToast = {
  success: (title: string, message?: string, duration?: number) => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: message,
      visibilityTime: duration || 3000,
      autoHide: true,
      topOffset: 40,
    });
  },
  error: (title: string, message?: string, duration?: number) => {
    Toast.show({
      type: 'error',
      text1: title,
      text2: message,
      visibilityTime: duration || 4000,
      autoHide: true,
      topOffset: 40,
    });
  },
  info: (title: string, message?: string, duration?: number) => {
    Toast.show({
      type: 'info',
      text1: title,
      text2: message,
      visibilityTime: duration || 3000,
      autoHide: true,
      topOffset: 40,
    });
  },
  warning: (title: string, message?: string, duration?: number) => {
    Toast.show({
      type: 'warning',
      text1: title,
      text2: message,
      visibilityTime: duration || 3500,
      autoHide: true,
      topOffset: 40,
    });
  },
};
