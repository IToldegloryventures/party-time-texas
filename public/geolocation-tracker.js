/**
 * Geolocation Tracker for NFC Scans
 * Captures user location when NFC is scanned
 */

class GeolocationTracker {
  constructor() {
    this.isSupported = 'geolocation' in navigator;
    this.locationData = null;
    this.isTracking = false;
  }

  /**
   * Get current location for NFC scan
   */
  async getLocationForScan() {
    if (!this.isSupported) {
      console.warn('Geolocation not supported');
      return null;
    }

    return new Promise(resolve => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000, // 5 seconds max
        maximumAge: 300000, // 5 minutes cache
      };

      navigator.geolocation.getCurrentPosition(
        position => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
          };
          this.locationData = locationData;
          resolve(locationData);
        },
        error => {
          console.warn('Geolocation error:', error.message);
          resolve(null);
        },
        options
      );
    });
  }

  /**
   * Track scan with location data
   */
  async trackScan(deviceId, scanType = 'nfc_tap', metadata = {}) {
    try {
      // Get location data
      const locationData = await this.getLocationForScan();

      // Prepare scan data
      const scanData = {
        deviceId,
        scanType,
        metadata,
        locationData,
      };

      // Send to tracking API
      const response = await fetch('/api/track-scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scanData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Scan tracked successfully:', result);
        return result;
      } else {
        console.error('Failed to track scan:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error tracking scan:', error);
      return null;
    }
  }

  /**
   * Request geolocation permission
   */
  async requestPermission() {
    if (!this.isSupported) {
      return false;
    }

    try {
      const location = await this.getLocationForScan();
      return location !== null;
    } catch (error) {
      console.error('Permission request failed:', error);
      return false;
    }
  }

  /**
   * Check if geolocation is available
   */
  isGeolocationAvailable() {
    return this.isSupported;
  }

  /**
   * Get cached location data
   */
  getCachedLocation() {
    return this.locationData;
  }
}

// Create global instance
window.geolocationTracker = new GeolocationTracker();

// Auto-request permission on page load
document.addEventListener('DOMContentLoaded', () => {
  if (window.geolocationTracker.isGeolocationAvailable()) {
    console.log('Geolocation available - requesting permission...');
    window.geolocationTracker.requestPermission();
  }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GeolocationTracker;
}
