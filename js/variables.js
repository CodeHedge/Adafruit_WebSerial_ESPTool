// Manifest-based device configuration
let manifestData = null;
let manifestLoadPromise = null;

/**
 * Load the manifest.json file from resources/CURRENT/
 * Caches the result after first load
 */
export async function loadManifest() {
    if (manifestData) {
        return manifestData;
    }
    
    if (manifestLoadPromise) {
        return manifestLoadPromise;
    }
    
    manifestLoadPromise = (async () => {
        try {
            const response = await fetch('resources/CURRENT/manifest.json');
            if (!response.ok) {
                throw new Error(`Failed to load manifest: ${response.status} ${response.statusText}`);
            }
            manifestData = await response.json();
            return manifestData;
        } catch (error) {
            console.error('Error loading manifest:', error);
            throw error;
        }
    })();
    
    return manifestLoadPromise;
}

/**
 * Get file paths for a specific device from the manifest
 * @param {string} deviceId - The device ID (e.g., "CYD2USB_INVERT_OFF")
 * @returns {Object|null} Object with bootloader, partitions, and firmware paths, or null if not found
 */
export function getDeviceFiles(deviceId) {
    if (!manifestData) {
        console.error('Manifest not loaded. Call loadManifest() first.');
        return null;
    }
    
    const device = manifestData.devices.find(d => d.id === deviceId);
    if (!device) {
        console.error(`Device not found in manifest: ${deviceId}`);
        return null;
    }
    
    return device.files;
}

/**
 * Get the version from the manifest
 * @returns {string|null} Version string or null if manifest not loaded
 */
export function getManifestVersion() {
    if (!manifestData) {
        return null;
    }
    return manifestData.version;
}

/**
 * Get all devices from the manifest
 * @returns {Array} Array of device objects
 */
export function getAllDevices() {
    if (!manifestData) {
        return [];
    }
    return manifestData.devices;
}
