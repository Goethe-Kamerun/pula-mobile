

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from 'react-native-onboarding-swiper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fontSizes, fontWeights } from '../lib/theme';

const styles = StyleSheet.create({
  skipBackButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipBackButtonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal as any,
  },
  nextFinishButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nextFinishButtonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal as any,
  },
  disabledText: {
    opacity: 0.5,
  },
});

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const insets = useSafeAreaInsets();

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

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    } else {
      handleDone();
    }
  };


  // Custom Skip/Back Button Component
  const SkipBackButton: React.FC<{ clickEnabled?: boolean }> = ({ clickEnabled = true }) => {
    const isFirstPage = currentPage === 0;
    
    return (
      <TouchableOpacity
        style={styles.skipBackButton}
        onPress={isFirstPage ? handleSkip : handleBack}
        disabled={!clickEnabled}
      >
        <Text style={[styles.skipBackButtonText, !clickEnabled && styles.disabledText]}>
          {isFirstPage ? 'Skip' : 'Back'}
        </Text>
      </TouchableOpacity>
    );
  };

  // Custom Next/Finish Button Component
  const NextFinishButton: React.FC<{ clickEnabled?: boolean }> = ({ clickEnabled = true }) => {
    const isLastPage = currentPage === 2;
    
    return (
      <TouchableOpacity
        style={styles.nextFinishButton}
        onPress={handleNext}
        disabled={!clickEnabled}
      >
        <Text style={[styles.nextFinishButtonText, !clickEnabled && styles.disabledText]}>
          {isLastPage ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    );
  };





  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        pageIndexCallback={(index) => setCurrentPage(index)}
        SkipButtonComponent={SkipBackButton}
        NextButtonComponent={NextFinishButton}
        showSkip={true}
        showNext={true}
        showDone={true}
        pages={[
        {
          backgroundColor: colors.white,
          image: (
            <View style={{ 
              width: 200, 
              height: 200, 
              backgroundColor: colors.primary, 
              borderRadius: 100, 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <Text style={{ fontSize: 80, color: colors.white }}>📱</Text>
            </View>
          ),
          title: 'Welcome to AGPB',
          subtitle: 'Easiest way to translate from one language to another',
          titleStyles: {
            color: colors.dark,
            fontSize: fontSizes.xxl * 1.3,
            fontWeight: fontWeights.bold as any,
          },
          subTitleStyles: {
            color: colors.primary,
            fontSize: fontSizes.lg * 1.5,
            fontWeight: fontWeights.normal as any,
          },
        },
        {
          backgroundColor: colors.light,
          image: (
            <View style={{ 
              width: 200, 
              height: 200, 
              backgroundColor: colors.primary, 
              borderRadius: 100, 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <Text style={{ fontSize: 80, color: colors.white }}>📋</Text>
            </View>
          ),
          title: 'Multiple Languages',
          subtitle: 'Select your languages and search for a word!',
          titleStyles: {
            color: colors.dark,
            fontSize: fontSizes.xxl * 1.3,
            fontWeight: fontWeights.bold as any,
          },
          subTitleStyles: {
            color: colors.primary,
            fontSize: fontSizes.lg * 1.5,
            fontWeight: fontWeights.normal as any,
          },
        },
        {
          backgroundColor: colors.lightGray,
          image: (
            <View style={{ 
              width: 200, 
              height: 200, 
              backgroundColor: colors.primary, 
              borderRadius: 100, 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <Text style={{ fontSize: 80, color: colors.white }}>⚡</Text>
            </View>
          ),
          title: 'Wikidata powered',
          subtitle: 'Uses Wikidata lexemes to provide the most accurate translations',
          titleStyles: {
            color: colors.dark,
            fontSize: fontSizes.xxl * 1.3,
            fontWeight: fontWeights.bold as any,
          },
          subTitleStyles: {
            color: colors.primary,
            fontSize: fontSizes.lg * 1.5,
            fontWeight: fontWeights.normal as any,
          },
        },
      ]}
      bottomBarColor={colors.darkGray}
      />
    </View>
  );
}
