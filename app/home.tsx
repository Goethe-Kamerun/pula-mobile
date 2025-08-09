import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { showToast } from '../lib/toast';

export default function HomeScreen() {
  const handleTestToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        showToast.success('Success!', 'Operation completed successfully');
        break;
      case 'error':
        showToast.error('Error!', 'Something went wrong');
        break;
      case 'info':
        showToast.info('Info', 'Here is some information for you');
        break;
      case 'warning':
        showToast.warning('Warning', 'Please be careful with this action');
        break;
    }
  };

  return (
    <Container>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to AGPB</Text>
        <Text style={styles.subtitle}>Your personal assistant</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>
          This is your home screen. Start building your amazing app here!
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.successButton]} 
            onPress={() => handleTestToast('success')}
          >
            <Text style={styles.buttonText}>Success Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.errorButton]} 
            onPress={() => handleTestToast('error')}
          >
            <Text style={styles.buttonText}>Error Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.infoButton]} 
            onPress={() => handleTestToast('info')}
          >
            <Text style={styles.buttonText}>Info Toast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.warningButton]} 
            onPress={() => handleTestToast('warning')}
          >
            <Text style={styles.buttonText}>Warning Toast</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  successButton: {
    backgroundColor: '#10B981',
  },
  errorButton: {
    backgroundColor: '#EF4444',
  },
  infoButton: {
    backgroundColor: '#3B82F6',
  },
  warningButton: {
    backgroundColor: '#F59E0B',
  },
});
