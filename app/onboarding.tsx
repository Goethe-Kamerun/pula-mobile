import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import { colors, fontSizes, fontWeights } from '../lib/theme';

// Custom Button Components
const SkipButton = ({ ...props }) => (
  <TouchableOpacity style={styles.navButton} {...props}>
    <Text style={styles.navButtonText}>Skip</Text>
  </TouchableOpacity>
);

const NextButton = ({ ...props }) => (
  <TouchableOpacity style={styles.navButton} {...props}>
    <Text style={styles.navButtonText}>Next</Text>
  </TouchableOpacity>
);

const DoneButton = ({ ...props }) => (
  <TouchableOpacity style={styles.doneButton} {...props}>
    <Text style={styles.doneButtonText}>Get Started</Text>
  </TouchableOpacity>
);

// Custom Dot Component
const Dot = ({ selected }: { selected: boolean }) => {
  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: selected ? colors.primary : colors.tertiary,
          width: selected ? 12 : 6,
          height: 6,
        },
      ]}
    />
  );
};

export default function OnboardingScreen() {
  const handleDone = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      router.replace('/home');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      router.replace('/home');
    }
  };

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      router.replace('/home');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      router.replace('/home');
    }
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleSkip}
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      DotComponent={Dot}
      bottomBarColor={colors.white}
      pages={[
        {
          backgroundColor: colors.white,
          image: (
            <View style={styles.imageContainer}>
              <Image 
                source={require('../assets/icon.png')} 
                style={styles.image} 
                resizeMode="contain"
              />
            </View>
          ),
          title: 'Welcome to AGPB',
          subtitle: 'The easiest way to translate and explore languages using the power of Wikidata.',
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
        },
        {
          backgroundColor: colors.white,
          image: (
            <View style={[styles.imageContainer, { backgroundColor: '#e6f0ff' }]}>
               <Text style={{ fontSize: 80 }}>🌍</Text>
            </View>
          ),
          title: 'Multiple Languages',
          subtitle: 'Seamlessly switch between languages and discover words across the globe.',
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
        },
        {
          backgroundColor: colors.white,
          image: (
            <View style={[styles.imageContainer, { backgroundColor: '#fff5e6' }]}>
               <Text style={{ fontSize: 80 }}>⚡</Text>
            </View>
          ),
          title: 'Wikidata Powered',
          subtitle: 'Access accurate, structured data directly from the Wikidata Lexemes knowledge base.',
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navButtonText: {
    fontSize: fontSizes.md,
    color: colors.primary,
    fontWeight: fontWeights.medium as any,
  },
  doneButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  doneButtonText: {
    fontSize: fontSizes.md,
    color: colors.white,
    fontWeight: fontWeights.bold as any,
  },
  dot: {
    borderRadius: 3,
    marginHorizontal: 3,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: 20,
    // Add subtle shadow
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    color: colors.dark,
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold as any,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: fontSizes.md,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

