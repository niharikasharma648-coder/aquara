import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const HydrationContext = createContext();
const API_BASE = 'http://localhost:8000/api';

const getLocalDateString = () => {
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
  return localISOTime;
};

export function HydrationProvider({ children }) {
  // Active screen / page navigation
  const [currentScreen, setCurrentScreen] = useState('home');

  // User biometrics for hydration calculation
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Morgan',
    weight: 72, // kg
    height: 178, // cm
    age: 28,
    sex: 'male', // 'male' | 'female' | 'prefer_not_to_say'
    activity: 'moderate', // 'low' | 'moderate' | 'high' | 'very_high'
    climate: 'moderate', // 'cool' | 'moderate' | 'hot' | 'very_hot'
    exercise: '60min', // 'none' | '30min' | '60min' | '90min'
    streakDays: 24,
  });

  // Calculate dynamic target based on biometrics & science formulas
  const calculatedTarget = useMemo(() => {
    // Baseline: 35ml per kg of bodyweight
    let baseMl = userProfile.weight * 35;

    // Biological sex adjustment
    if (userProfile.sex === 'female') baseMl *= 0.95;
    if (userProfile.sex === 'male') baseMl *= 1.05;

    // Activity multiplier
    const activityMap = { low: 0, moderate: 250, high: 500, very_high: 800 };
    baseMl += activityMap[userProfile.activity] || 250;

    // Climate multiplier
    const climateMap = { cool: 0, moderate: 150, hot: 450, very_hot: 750 };
    baseMl += climateMap[userProfile.climate] || 150;

    // Exercise multiplier
    const exerciseMap = { none: 0, '30min': 250, '60min': 500, '90min': 800 };
    baseMl += exerciseMap[userProfile.exercise] || 500;

    // Round to nearest 100ml
    const totalMl = Math.round(baseMl / 100) * 100;
    const totalL = (totalMl / 1000).toFixed(1);
    const glasses = Math.round(totalMl / 250);

    // Distribution breakdown
    const morningL = ((totalMl * 0.25) / 1000).toFixed(1);
    const afternoonL = ((totalMl * 0.36) / 1000).toFixed(1);
    const eveningL = ((totalMl * 0.29) / 1000).toFixed(1);
    const exerciseL = ((totalMl * 0.1) / 1000).toFixed(1);

    return {
      totalMl,
      totalL: parseFloat(totalL),
      glasses,
      breakdown: {
        morning: parseFloat(morningL),
        afternoon: parseFloat(afternoonL),
        evening: parseFloat(eveningL),
        exercise: parseFloat(exerciseL),
      }
    };
  }, [userProfile]);

  // Real-time daily intake logging (in ml)
  const [intakeLoggedMl, setIntakeLoggedMl] = useState(1800); // initial: 1.8L

  // Timeline schedule items
  const [scheduleItems, setScheduleItems] = useState([
    {
      id: 1,
      time: '7:00 AM',
      title: 'Morning Activation',
      description: 'Kickstart metabolic processes.',
      amountMl: 300,
      completed: true,
    },
    {
      id: 2,
      time: '9:00 AM',
      title: 'Cognitive Boost',
      description: 'Maintain focus during deep work.',
      amountMl: 250,
      completed: true,
    },
    {
      id: 3,
      time: '12:00 PM',
      title: 'Midday Replenishment',
      description: 'Support digestion and nutrient transport.',
      amountMl: 500,
      completed: false,
    },
    {
      id: 4,
      time: '3:00 PM',
      title: 'Afternoon Flow',
      description: 'Prevent the afternoon slump.',
      amountMl: 250,
      completed: false,
    },
    {
      id: 5,
      time: '7:00 PM',
      title: 'Evening Recovery',
      description: 'Gentle hydration pre-dinner.',
      amountMl: 300,
      completed: false,
    },
  ]);

  // Weekly data for chart
  const [weeklyData, setWeeklyData] = useState([
    { day: 'Mon', intake: 1.7, goal: calculatedTarget.totalL, percent: 60 },
    { day: 'Tue', intake: 2.2, goal: calculatedTarget.totalL, percent: 80 },
    { day: 'Wed', intake: 2.7, goal: calculatedTarget.totalL, percent: 95, current: true },
    { day: 'Thu', intake: 2.0, goal: calculatedTarget.totalL, percent: 70 },
    { day: 'Fri', intake: 2.4, goal: calculatedTarget.totalL, percent: 85 },
    { day: 'Sat', intake: 1.4, goal: calculatedTarget.totalL, percent: 50 },
    { day: 'Sun', intake: 2.5, goal: calculatedTarget.totalL, percent: 90 },
  ]);

  // Fetch functions for backend sync
  const fetchProfile = async () => {
    try {
      const res = await fetch(`${API_BASE}/profile`);
      if (res.ok) {
        const data = await res.json();
        setUserProfile(prev => ({ ...prev, ...data }));
      }
    } catch (err) {
      console.warn("FastAPI backend profile endpoint offline. Using local defaults.");
    }
  };

  const fetchIntake = async (dateStr) => {
    try {
      const res = await fetch(`${API_BASE}/intake?date=${dateStr}`);
      if (res.ok) {
        const data = await res.json();
        setIntakeLoggedMl(data.intakeLoggedMl);
        setScheduleItems(data.scheduleItems);
      }
    } catch (err) {
      console.warn("FastAPI backend daily logs endpoint offline. Using local defaults.");
    }
  };

  const fetchInsights = async (dateStr) => {
    try {
      const res = await fetch(`${API_BASE}/insights?date=${dateStr}`);
      if (res.ok) {
        const data = await res.json();
        setWeeklyData(data.weeklyData);
        if (data.streakDays !== undefined) {
          setUserProfile(prev => ({ ...prev, streakDays: data.streakDays }));
        }
      }
    } catch (err) {
      console.warn("FastAPI backend insights endpoint offline. Using local defaults.");
    }
  };

  // Sync state on load
  useEffect(() => {
    const todayStr = getLocalDateString();
    fetchProfile().then(() => {
      fetchIntake(todayStr);
      fetchInsights(todayStr);
    });
  }, []);

  // Action helpers (synced with backend API)
  const logQuickIntake = async (amountMl = 250) => {
    // Optimistic update
    setIntakeLoggedMl(prev => Math.min(prev + amountMl, Math.max(prev + amountMl, calculatedTarget.totalMl + 1000)));

    try {
      const dateStr = getLocalDateString();
      const res = await fetch(`${API_BASE}/intake/log?date=${dateStr}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amountMl })
      });
      if (res.ok) {
        const data = await res.json();
        setIntakeLoggedMl(data.intakeLoggedMl);
        fetchInsights(dateStr);
      }
    } catch (err) {
      console.warn("Failed to sync logQuickIntake with backend:", err);
    }
  };

  const toggleScheduleItem = async (id) => {
    // Optimistic local update
    setScheduleItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextCompleted = !item.completed;
          if (nextCompleted) {
            setIntakeLoggedMl(c => c + item.amountMl);
          } else {
            setIntakeLoggedMl(c => Math.max(0, c - item.amountMl));
          }
          return { ...item, completed: nextCompleted };
        }
        return item;
      })
    );

    try {
      const dateStr = getLocalDateString();
      const res = await fetch(`${API_BASE}/intake/schedule/${id}/toggle?date=${dateStr}`, {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();
        setIntakeLoggedMl(data.intakeLoggedMl);
        setScheduleItems(data.scheduleItems);
        fetchInsights(dateStr);
      }
    } catch (err) {
      console.warn("Failed to sync toggleScheduleItem with backend:", err);
    }
  };

  const updateProfile = async (newMetrics) => {
    // Optimistic local update
    setUserProfile(prev => ({ ...prev, ...newMetrics }));

    try {
      const res = await fetch(`${API_BASE}/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMetrics)
      });
      if (res.ok) {
        const data = await res.json();
        setUserProfile(data);
        fetchInsights(getLocalDateString());
      }
    } catch (err) {
      console.warn("Failed to sync updateProfile with backend:", err);
    }
  };

  const handleSetIntakeLoggedMl = async (value) => {
    if (typeof value === 'function') {
      setIntakeLoggedMl(value);
      return;
    }
    setIntakeLoggedMl(value);

    try {
      const dateStr = getLocalDateString();
      const res = await fetch(`${API_BASE}/intake/reset?date=${dateStr}&amountMl=${value}`, {
        method: 'PUT'
      });
      if (res.ok) {
        const data = await res.json();
        setIntakeLoggedMl(data.intakeLoggedMl);
        setScheduleItems(data.scheduleItems);
        fetchInsights(dateStr);
      }
    } catch (err) {
      console.warn("Failed to sync setIntakeLoggedMl with backend:", err);
    }
  };

  const progressPercent = Math.min(
    100,
    Math.round((intakeLoggedMl / calculatedTarget.totalMl) * 100)
  );

  return (
    <HydrationContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        userProfile,
        updateProfile,
        calculatedTarget,
        intakeLoggedMl,
        setIntakeLoggedMl: handleSetIntakeLoggedMl,
        progressPercent,
        scheduleItems,
        toggleScheduleItem,
        logQuickIntake,
        weeklyData,
      }}
    >
      {children}
    </HydrationContext.Provider>
  );
}

export function useHydration() {
  const context = useContext(HydrationContext);
  if (!context) {
    throw new Error('useHydration must be used within a HydrationProvider');
  }
  return context;
}
