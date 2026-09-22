/**
 * Enterprise Project Data Provider for Syed Fahad Hussain (@fahadappinator)
 * Production Android Applications Portfolio (26+ Private Repositories under NDA)
 */

const GITLAB_USERNAME = 'fahadappinator';
const TOTAL_ENTERPRISE_PROJECTS = 60;

// Curated 26 Production Android Applications (Private Enterprise Codebases)
const FEATURED_PROJECTS = [
    {
        id: 'p1',
        name: 'Universal TV Remote',
        description: 'Android Universal IR & Wi-Fi TV Remote control app supporting LG webOS, Samsung Tizen, Android TV DLNA protocols, and IR Blaster transmission.',
        category: 'utility',
        tags: ['Kotlin', 'IR Blaster', 'DLNA Protocol', 'SSDP Discovery', 'Compose UI'],
        is_private: true,
        scale: 'Smart TV & Hardware Utility'
    },
    {
        id: 'p2',
        name: 'Caller Name Announcer',
        description: 'Hands-free Incoming Call & SMS Voice Announcer application using Android Text-To-Speech (TTS) engine, TelephonyManager listeners, and LED flash alerts.',
        category: 'utility',
        tags: ['Kotlin', 'TTS Engine', 'TelephonyManager', 'Foreground Service'],
        is_private: true,
        scale: 'System Utility'
    },
    {
        id: 'p3',
        name: 'Smart Switch Data Transfer',
        description: 'High-speed Wi-Fi Direct & Hotspot Phone Transfer utility enabling fast phone cloning, contacts backup, and cross-device file migration with zero data usage.',
        category: 'utility',
        tags: ['Kotlin', 'Wi-Fi P2P Direct', 'Socket Transfer', 'Clean Arch'],
        is_private: true,
        scale: 'Data Migration Tool'
    },
    {
        id: 'p4',
        name: 'Qibla Direction & Prayer Times',
        description: 'Real-time 3D Magnetometer Compass & GPS Qibla Direction finder featuring location-accurate prayer times and offline azimuth math algorithms.',
        category: 'islamic',
        tags: ['Kotlin', 'Sensor Manager', 'FusedLocation', 'Compass Math'],
        is_private: true,
        scale: 'Islamic GPS Tool'
    },
    {
        id: 'p5',
        name: 'Quranic Noor Suite',
        description: 'Comprehensive Quranic suite with audio recitation streaming, vector typography rendering, tajweed highlighting, and offline bookmarks.',
        category: 'islamic',
        tags: ['Kotlin', 'ExoPlayer', 'Room DB', 'Vector Graphics'],
        is_private: true,
        scale: 'Audio & Quran App'
    },
    {
        id: 'p6',
        name: 'GPS Navigation & Route Planner',
        description: 'Real-time GPS Voice Navigation, Route Planner, and Live Traffic tracker leveraging Google Maps SDK, FusedLocationProviderClient, and custom overlay markers.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'Google Maps SDK', 'FusedLocation', 'Route Optimization'],
        is_private: true,
        scale: 'GPS & Location'
    },
    {
        id: 'p7',
        name: 'Charging Animation Effects',
        description: 'Dynamic Battery Charging Animation & Battery Health monitor with custom Lottie/Canvas visualizers and battery status BroadcastReceivers.',
        category: 'compose',
        tags: ['Kotlin', 'Lottie Animations', 'BatteryManager', 'Compose UI'],
        is_private: true,
        scale: 'Custom UI Tool'
    },
    {
        id: 'p8',
        name: 'Cloud Storage Drive',
        description: 'Secure Cloud Backup & File Storage app with background chunked file uploads, WorkManager queueing, AES-256 encryption, and drive sync.',
        category: 'utility',
        tags: ['Kotlin', 'WorkManager', 'AES-256', 'Retrofit', 'Room DB'],
        is_private: true,
        scale: 'Cloud Utility'
    },
    {
        id: 'p9',
        name: 'Fingerprint Animation Live UI',
        description: 'Custom Neon Fingerprint Animation app featuring biometric lock preview, live wallpaper engine, and hardware sensor integration.',
        category: 'compose',
        tags: ['Kotlin', 'BiometricPrompt', 'Live Wallpaper', 'Canvas UI'],
        is_private: true,
        scale: 'Biometric UI App'
    },
    {
        id: 'p10',
        name: 'Satellite Finder AR',
        description: 'AR-assisted Satellite Dish Pointer & Azimuth/Elevation calculator using device Gyroscope, Accelerometer, and Augmented Reality camera overlay.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'AR Camera', 'Sensors Math', 'GPS Elevation'],
        is_private: true,
        scale: 'AR & Gyroscope Tool'
    },
    {
        id: 'p11',
        name: 'Smart Switch Cloud Backup',
        description: 'Enterprise-grade Phone Clone & Content Migration utility supporting QR code fast pairing, contacts, photos, and apps transfer.',
        category: 'utility',
        tags: ['Kotlin', 'QR Scanner', 'Wi-Fi Direct', 'File I/O Engine'],
        is_private: true,
        scale: 'Data Migration Tool'
    },
    {
        id: 'p12',
        name: 'Caller ID & Spam Blocker',
        description: 'Real-time Incoming Call Identification, Spam Number Detector, and Call Blocker powered by local Room database index and floating overlay window.',
        category: 'utility',
        tags: ['Kotlin', 'Overlay Window', 'CallScreeningService', 'Room DB'],
        is_private: true,
        scale: 'Security & Call Manager'
    },
    {
        id: 'p13',
        name: 'WallSnap 4K Wallpapers',
        description: 'Ultra-HD 4K Wallpaper & Aesthetics app featuring auto-wallpaper changer, Paging 3 image grid, Coil image caching, and parallax preview.',
        category: 'compose',
        tags: ['Kotlin', 'Paging 3', 'Coil Caching', 'Wallpaper Manager'],
        is_private: true,
        scale: 'Media App'
    },
    {
        id: 'p14',
        name: 'Quran Pro Audio Reader',
        description: 'Feature-rich Holy Quran application with multi-reciter audio playback, verse bookmarking, translations in 15+ languages, and dark mode UI.',
        category: 'islamic',
        tags: ['Kotlin', 'ExoPlayer Audio', 'Room DB', 'Clean Arch'],
        is_private: true,
        scale: 'Islamic Audio App'
    },
    {
        id: 'p15',
        name: 'Phone Number Tracker',
        description: 'Mobile Number Location Lookup, Area Code finder, and ISD/STD country code locator with interactive map visualization.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'Maps SDK', 'SQLite', 'Reverse Geocoding'],
        is_private: true,
        scale: 'Location Utility'
    },
    {
        id: 'p16',
        name: '3D Mushaf Quran Reader',
        description: 'Classic Mushaf Page Flip Quran Reader with realistic 3D paper turning effect, high-resolution vector page assets, and offline bookmarking.',
        category: 'islamic',
        tags: ['Kotlin', 'OpenGL 3D Curl', 'Vector Pages', 'Offline Cache'],
        is_private: true,
        scale: '3D Page Turn Reader'
    },
    {
        id: 'p17',
        name: 'Altimeter & Altitude Tracker',
        description: 'Precision Barometric Altimeter & Elevation Meter app utilizing hardware Barometer sensor, GPS elevation calibration, and weather pressure trends.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'Barometer Sensor', 'GPS Elevation', 'StateFlow'],
        is_private: true,
        scale: 'GPS Sensor Tool'
    },
    {
        id: 'p18',
        name: 'QR Code Scanner & Generator',
        description: 'High-speed CameraX barcode & QR scanner featuring batch mode scanning, custom QR code generator, and instant action handlers.',
        category: 'utility',
        tags: ['Kotlin', 'CameraX', 'ML Kit Barcode', 'Bitmap Generator'],
        is_private: true,
        scale: 'Camera & Utility Tool'
    },
    {
        id: 'p19',
        name: 'Voice SMS & Real-Time Translator',
        description: 'Voice-to-Text messaging & multi-language speech translator powered by SpeechRecognizer API, ML Kit Translate, and text overlay.',
        category: 'utility',
        tags: ['Kotlin', 'SpeechRecognizer', 'ML Kit Translation', 'Coroutines'],
        is_private: true,
        scale: 'Voice & AI Utility'
    },
    {
        id: 'p20',
        name: 'Football Live Score & Stats',
        description: 'Real-time sports score tracker featuring live WebSocket match commentary, standings, push notifications, and team stats.',
        category: 'compose',
        tags: ['Kotlin', 'WebSockets', 'FCM Push', 'Jetpack Compose', 'Room'],
        is_private: true,
        scale: 'Real-Time Sports App'
    },
    {
        id: 'p21',
        name: 'CV Maker & Resume Builder',
        description: 'Professional resume creation tool with customizable PDF templates, PDF print manager, photo crop engine, and offline data storage.',
        category: 'utility',
        tags: ['Kotlin', 'PdfDocument API', 'Room DB', 'Custom Views'],
        is_private: true,
        scale: 'Document & PDF Tool'
    },
    {
        id: 'p22',
        name: 'Building Cost Estimator',
        description: 'Civil engineering & construction material cost calculator with formula engine, PDF quote export, and unit conversions.',
        category: 'utility',
        tags: ['Kotlin', 'Math Calculation Engine', 'Room DB', 'PDF Export'],
        is_private: true,
        scale: 'Engineering Utility'
    },
    {
        id: 'p23',
        name: 'Bluetooth Device Manager & Finder',
        description: 'BLE (Bluetooth Low Energy) device scanner & lost gadget radar leveraging RSSI signal strength meter and background proximity alerts.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'BLE Scanner', 'BluetoothGatt', 'RSSI Math'],
        is_private: true,
        scale: 'Hardware & BLE App'
    },
    {
        id: 'p24',
        name: 'Battery Charging Animation Pro',
        description: 'Custom Charging Themes app featuring neon battery waves, charging speed tester, and battery temperature monitors.',
        category: 'compose',
        tags: ['Kotlin', 'Custom Canvas', 'BatteryManager', 'Compose Animations'],
        is_private: true,
        scale: 'Custom UI App'
    },
    {
        id: 'p25',
        name: 'Electronic Signature & PDF Signer',
        description: 'Digital signature pad & document signing utility supporting vector pen smooth curves, PDF embedding, and encrypted storage.',
        category: 'utility',
        tags: ['Kotlin', 'Vector Pen Canvas', 'PDF Annotation', 'AES-256'],
        is_private: true,
        scale: 'Productivity & Security'
    },
    {
        id: 'p26',
        name: 'Live Map Camera & Timestamp GPS',
        description: 'Geo-tagging photo camera app embedding GPS coordinates, address, altitude, and timestamp directly onto photo EXIF & Canvas overlays.',
        category: 'gps-sensors',
        tags: ['Kotlin', 'CameraX', 'Geocoding', 'FusedLocation', 'EXIF I/O'],
        is_private: true,
        scale: 'Camera & GPS App'
    }
];

async function fetchGitLabProjects() {
    return FEATURED_PROJECTS;
}



