/**
 * Geolocation API Integration for Cosmic Portals
 * Captures user location for NFC scan tracking
 */

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  speed?: number;
  timestamp: number;
}

export interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

export class GeolocationService {
  private isSupported: boolean;

  constructor() {
    this.isSupported = 'geolocation' in navigator;
  }

  /**
   * Check if geolocation is supported
   */
  isGeolocationSupported(): boolean {
    return this.isSupported;
  }

  /**
   * Get current position with error handling
   */
  async getCurrentPosition(options: GeolocationOptions = {}): Promise<LocationData | null> {
    if (!this.isSupported) {
      console.warn('Geolocation is not supported by this browser');
      return null;
    }

    const defaultOptions: GeolocationOptions = {
      enableHighAccuracy: true,
      timeout: 10000, // 10 seconds
      maximumAge: 300000, // 5 minutes
      ...options,
    };

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData: LocationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude || undefined,
            altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
            heading: position.coords.heading || undefined,
            speed: position.coords.speed || undefined,
            timestamp: position.timestamp,
          };
          resolve(locationData);
        },
        (error) => {
          console.error('Geolocation error:', error);
          this.handleGeolocationError(error);
          resolve(null);
        },
        defaultOptions
      );
    });
  }

  /**
   * Watch position changes (for real-time tracking)
   */
  watchPosition(
    callback: (location: LocationData) => void,
    errorCallback?: (error: GeolocationPositionError) => void,
    options: GeolocationOptions = {}
  ): number | null {
    if (!this.isSupported) {
      console.warn('Geolocation is not supported by this browser');
      return null;
    }

    const defaultOptions: GeolocationOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000,
      ...options,
    };

    return navigator.geolocation.watchPosition(
      (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude || undefined,
          altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
          heading: position.coords.heading || undefined,
          speed: position.coords.speed || undefined,
          timestamp: position.timestamp,
        };
        callback(locationData);
      },
      (error) => {
        console.error('Geolocation watch error:', error);
        if (errorCallback) {
          errorCallback(error);
        } else {
          this.handleGeolocationError(error);
        }
      },
      defaultOptions
    );
  }

  /**
   * Stop watching position
   */
  clearWatch(watchId: number): void {
    navigator.geolocation.clearWatch(watchId);
  }

  /**
   * Get location with fallback to IP-based location
   */
  async getLocationWithFallback(): Promise<LocationData | null> {
    // Try geolocation first
    const location = await this.getCurrentPosition();
    if (location) {
      return location;
    }

    // Fallback to IP-based location
    return this.getIPBasedLocation();
  }

  /**
   * Get approximate location based on IP address
   */
  private async getIPBasedLocation(): Promise<LocationData | null> {
    try {
      // Using a free IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      if (data.latitude && data.longitude) {
        return {
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: 10000, // IP-based location is less accurate
          timestamp: Date.now(),
        };
      }
    } catch (error) {
      console.error('IP-based location error:', error);
    }

    return null;
  }

  /**
   * Handle geolocation errors
   */
  private handleGeolocationError(error: GeolocationPositionError): void {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.warn('User denied geolocation permission');
        break;
      case error.POSITION_UNAVAILABLE:
        console.warn('Location information unavailable');
        break;
      case error.TIMEOUT:
        console.warn('Geolocation request timed out');
        break;
      default:
        console.warn('Unknown geolocation error');
        break;
    }
  }

  /**
   * Calculate distance between two points (in meters)
   */
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  /**
   * Check if location is within a geofence
   */
  isWithinGeofence(
    userLat: number,
    userLon: number,
    centerLat: number,
    centerLon: number,
    radiusMeters: number
  ): boolean {
    const distance = this.calculateDistance(userLat, userLon, centerLat, centerLon);
    return distance <= radiusMeters;
  }
}

// Export singleton instance
export const geolocationService = new GeolocationService();
