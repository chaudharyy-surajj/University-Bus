import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth, db } from '../lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);           // Firebase User
  const [role, setRole] = useState('student');      // default until loaded
  const [initializing, setInitializing] = useState(true);
  const isAuthenticated = !!user;

  // Keep Firebase auth state in sync with React state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u || null);
      if (u) {
        // Load role from Firestore users/{uid}
        try {
          const snap = await getDoc(doc(db, 'users', u.uid));
          const r = snap.exists() && snap.data()?.role ? snap.data().role : 'student';
          setRole(r);
        } catch {
          setRole('student');
        }
      } else {
        setRole('student');
      }
      setInitializing(false);
    });
    return unsub;
  }, []);

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    await signOut(auth);
  }

  // Optional helper to fetch a fresh ID token for APIs
  async function getToken() {
    if (!auth.currentUser) return null;
    return await getIdToken(auth.currentUser, false);
  }

  // Keep role setter compatible with Navbar and persist to Firestore
  async function updateRole(nextRole) {
    setRole(nextRole);
    if (auth.currentUser) {
      await setDoc(doc(db, 'users', auth.currentUser.uid), { role: nextRole }, { merge: true });
    }
  }

  const value = useMemo(
    () => ({ user, isAuthenticated, role, setRole: updateRole, login, logout, getToken, initializing }),
    [user, isAuthenticated, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
