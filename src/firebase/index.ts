'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

/**
 * Initializes the Firebase App and its core services.
 * This function handles both production (App Hosting) and development environments.
 */
export function initializeFirebase() {
  // If an app is already initialized, return the existing SDK instances.
  if (getApps().length > 0) {
    return getSdks(getApp());
  }

  let firebaseApp: FirebaseApp;
  try {
    // Attempt to initialize via Firebase App Hosting environment variables.
    // This is the preferred method for production deployments.
    firebaseApp = initializeApp();
  } catch (e) {
    // If automatic initialization fails (common in local development),
    // fall back to the provided firebaseConfig object.
    firebaseApp = initializeApp(firebaseConfig);
  }

  return getSdks(firebaseApp);
}

/**
 * Returns an object containing the initialized Firebase services.
 * @param firebaseApp The initialized FirebaseApp instance.
 */
export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
