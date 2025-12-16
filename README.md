# BOM Local Radar Card

A Home Assistant custom card that displays Australian Bureau of Meteorology (BOM) rain radar data using the local [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service).

## Background

The Australian Bureau of Meteorology's radar API endpoint stopped working in December 2024, breaking integrations like the popular [bom-radar-card](https://github.com/Makin-Things/bom-radar-card) for Home Assistant. This card provides a replacement solution that displays BOM radar data by connecting to the [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service), which caches radar data locally and provides it via a REST API.

## Features

- 🌧️ **Live Radar Display**: View the latest BOM rain radar images for any Australian location
- 🎬 **Animated Slideshow**: Play through radar frames to see precipitation movement
- 📊 **Historical Data**: View radar history from 1 hour to 24 hours ago
- 🎯 **Location-Based**: Support for any Australian suburb/state combination
- 🔄 **Auto-Refresh**: Automatically updates radar data at configurable intervals
- 🎨 **Beautiful UI**: Modern, responsive design that integrates seamlessly with Home Assistant themes
- ⚙️ **Visual Editor**: Full GUI configuration editor (no YAML editing required)

## Prerequisites

- **Home Assistant**: Version 2024.1.0 or later
- **Docker**: Required to run the BOM Local Service (Docker Engine 20.10+ or Docker Desktop)
- **BOM Local Service**: Must be installed and running (covered in installation steps below)

## Installation

This card requires the [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service) to be running. Follow these steps to set up both the service and the card.

### Step 1: Install BOM Local Service

The service must be running and accessible to Home Assistant before you can use this card.

#### Option A: Docker Run (Quick Start)

Run the service using Docker:

```bash
docker run -d \
  --name bom-local-service \
  -p 8082:8080 \
  -v $(pwd)/cache:/app/cache \
  --shm-size=1gb \
  --ipc=host \
  -e CORS__ALLOWEDORIGINS="http://homeassistant.local:8123" \
  ghcr.io/alexhopeoconnor/bom-local-service:latest
```

**CORS Configuration**: Replace `http://homeassistant.local:8123` with your actual Home Assistant URL. Since this service is intended to run locally, you can use `"*"` to allow all origins for simplicity. See the [CORS Configuration Explained](#cors-configuration-explained) section below for detailed options.

#### Option B: Docker Compose (Recommended for Production)

Create a `docker-compose.yml` file:

```yaml
services:
  bom-local-service:
    image: ghcr.io/alexhopeoconnor/bom-local-service:latest
    container_name: bom-local-service
    ports:
      - "8082:8080"
    volumes:
      - ./cache:/app/cache
    environment:
      # CORS Configuration - Set to your Home Assistant URL(s)
      # Replace with your actual Home Assistant URL, or use "*" for local development
      # Multiple origins can be comma-separated: "http://homeassistant.local:8123,http://192.168.1.100:8123"
      - CORS__ALLOWEDORIGINS=http://homeassistant.local:8123
      - CORS__ALLOWEDMETHODS=GET,POST,OPTIONS
      - CORS__ALLOWEDHEADERS=*
      - CORS__ALLOWCREDENTIALS=false
    shm_size: 1gb
    ipc: host
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

#### CORS Configuration Explained

**Why CORS matters**: Home Assistant runs in a browser, which enforces Cross-Origin Resource Sharing (CORS) policies. The service must explicitly allow requests from your Home Assistant origin.

**Important gotcha**: The origin is determined by how you **access** Home Assistant in your browser, not by how the service is configured. If you access HA via `http://localhost:8123` one time and `http://192.168.1.100:8123` another time, you need to include both origins in the CORS configuration. The origin must **exactly match** the URL in your browser's address bar.

**Quick Setup Options**:

- **Simplest (recommended for local use)**: Use `"*"` to allow all origins. Since this service runs locally, this is fine and avoids configuration issues.
- **Specific origin**: Use your exact Home Assistant URL, e.g., `"http://192.168.1.100:8123"` or `"http://localhost:8123"`
- **Multiple origins**: Use comma-separated values: `"http://localhost:8123,http://192.168.1.100:8123,http://homeassistant.local:8123"`

**Common scenarios**:
- Accessing via localhost: Use `"http://localhost:8123"` (note: `localhost` and `127.0.0.1` are different origins - include both if you use both)
- Accessing via IP: Use `"http://192.168.1.100:8123"` (replace with your HA's IP)
- Accessing via hostname: Use `"http://homeassistant.local:8123"` (use exact hostname)
- Using HTTPS: Include the `https://` version: `"https://homeassistant.local:8123"`

**Troubleshooting**: If you get CORS errors, check the browser console - it shows the exact origin that was rejected. Ensure that origin exactly matches one in your `CORS__ALLOWEDORIGINS` configuration.

**Verify the service is running**:
- Open `http://localhost:8082/radar/Brisbane/QLD` in your browser (replace with your suburb/state) - you should see the demo app
- Or check the API: `curl http://localhost:8082/api/radar/Brisbane/QLD/metadata`

For more detailed service setup and configuration options, see the [BOM Local Service README](https://github.com/alexhopeoconnor/bom-local-service).

### Step 2: Install the Card via HACS

1. Open HACS in Home Assistant
2. Go to **Frontend** → **Explore & Download Repositories**
3. Search for **BOM Local Radar Card**
4. Click **Download**
5. Restart Home Assistant

### Step 3: Add the Card to Your Dashboard

1. Edit your Lovelace dashboard
2. Click **Add Card**
3. Search for **BOM Local Radar Card** or select **Custom: BOM Local Radar Card**
4. Configure the card (see [Configuration](#configuration) section below)
5. Set the **Service URL** to match your service installation (e.g., `http://localhost:8082` or `http://192.168.1.50:8082`)

## Configuration

### Using the Visual Editor (Recommended)

1. Add a card to your Lovelace dashboard
2. Search for **BOM Local Radar Card** or select **Custom: BOM Local Radar Card**
3. Configure using the visual editor:
   
   **Service Configuration**:
   - **Service URL**: Base URL of your BOM Local Service (default: `http://localhost:8082`)
   - **Suburb**: The suburb name (e.g., `Pomona`, `Brisbane`) - **Required**
   - **State**: State abbreviation (e.g., `QLD`, `NSW`, `VIC`) - **Required**
   
   **Display**:
   - **Card Title**: Optional custom title for the card
   - **Show Metadata**: Toggle to show/hide cache status, observation time, and weather station info (default: `true`)
   
   **Slideshow**:
   - **Timespan**: Select historical data range - `latest` (Latest 7 frames), `1h`, `3h`, `6h`, `12h`, or `24h` (default: `latest`)
   - **Frame Interval**: Seconds between frames during animation (default: `2.0`, range: 0.5-10)
   - **Auto Play**: Automatically start animation when data loads (default: `true`)
   
   **Auto Refresh**:
   - **Refresh Interval**: Seconds between automatic data refreshes (default: `30`, range: 10-300)

**Note**: For custom time ranges (using `timespan: custom`), you'll need to configure `custom_start_time` and `custom_end_time` via YAML as these options are not available in the visual editor.

### Using YAML

```yaml
type: custom:bom-local-radar-card
service_url: http://localhost:8082
suburb: Pomona
state: QLD
card_title: Local Weather Radar
show_metadata: true
timespan: latest
frame_interval: 2.0
auto_play: true
refresh_interval: 30
```

For custom time ranges:

```yaml
type: custom:bom-local-radar-card
service_url: http://localhost:8082
suburb: Brisbane
state: QLD
timespan: custom
custom_start_time: "2024-01-15T10:00:00Z"
custom_end_time: "2024-01-15T14:00:00Z"
```

### Configuration Options

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `service_url` | string | `http://localhost:8082` | No | Base URL of the BOM Local Service |
| `suburb` | string | - | **Yes** | Suburb name (e.g., "Pomona", "Brisbane") |
| `state` | string | - | **Yes** | State abbreviation (e.g., "QLD", "NSW", "VIC") |
| `card_title` | string | - | No | Custom title displayed at the top of the card |
| `show_metadata` | boolean | `true` | No | Show/hide cache status, observation time, and weather station info |
| `timespan` | string | `latest` | No | Historical data timespan: `latest`, `1h`, `3h`, `6h`, `12h`, `24h`, or `custom` |
| `frame_interval` | number | `2.0` | No | Seconds between frames during animation (range: 0.5-10) |
| `auto_play` | boolean | `true` | No | Automatically start animation when data loads |
| `refresh_interval` | number | `30` | No | Seconds between automatic data refreshes (range: 10-300) |
| `custom_start_time` | string | - | No | ISO 8601 datetime for custom timespan start (requires `timespan: custom`) |
| `custom_end_time` | string | - | No | ISO 8601 datetime for custom timespan end (requires `timespan: custom`) |

## Usage Examples

### Basic Configuration

Display the latest radar frames for a location:

```yaml
type: custom:bom-local-radar-card
suburb: Brisbane
state: QLD
service_url: http://192.168.1.100:8082
```

### Historical Data (Last 3 Hours)

View radar history from the past 3 hours:

```yaml
type: custom:bom-local-radar-card
suburb: Melbourne
state: VIC
service_url: http://192.168.1.100:8082
timespan: 3h
auto_play: true
frame_interval: 1.5
```

### Custom Time Range

View radar data for a specific time period:

```yaml
type: custom:bom-local-radar-card
suburb: Sydney
state: NSW
service_url: http://192.168.1.100:8082
timespan: custom
custom_start_time: "2024-01-15T10:00:00Z"
custom_end_time: "2024-01-15T14:00:00Z"
```

### Manual Control (No Auto-Play)

Display radar with manual controls only:

```yaml
type: custom:bom-local-radar-card
suburb: Adelaide
state: SA
service_url: http://192.168.1.100:8082
auto_play: false
frame_interval: 3.0
```

### Different Service Location

If your BOM Local Service is running on a different machine:

```yaml
type: custom:bom-local-radar-card
suburb: Perth
state: WA
service_url: http://192.168.1.50:8082
refresh_interval: 60
```

## Controls

The card provides several controls for navigating radar frames:

- **Play/Pause Button**: Start or stop the animation
- **Previous/Next Buttons**: Navigate to the previous or next frame
- **Frame Slider**: Drag to jump to any frame
- **Navigation Buttons**:
  - ⏮ First frame
  - -10 / +10: Jump backward/forward by 10 frames
  - ⏭ Last frame

The card displays frame information including frame number, total frames, and timestamp.

## Development

### Quick Start for Local Development

The easiest way to start developing is to use the included test environment script:

```bash
./run.sh test
```

This single command will:
1. Build the card (auto-detects Docker or npm)
2. Start Home Assistant in a Docker container (port 8124)
3. Start the BOM Local Service (port 8082)
4. Copy the built card to Home Assistant's `www` directory
5. Configure CORS properly for local testing

**Access your test environment:**
- Home Assistant: http://localhost:8124
- BOM Local Service: http://localhost:8082

**Default test credentials:** Username: `testuser`, Password: `testpass123`

### Available Scripts

The repository includes several helper scripts for development:

#### Main Entry Point: `./run.sh`

The main script that handles building, testing, and cleaning:

```bash
./run.sh [COMMAND] [BUILD_METHOD]
```

**Commands:**
- `build [docker|npm]` - Build the card (auto-detects method if not specified)
- `test` - Build and start the test Home Assistant environment
- `update [docker|npm]` - Rebuild card and update running test environment (preserves HA state)
- `clean` - Clean test environment (stops containers, removes data)

**Build Methods:**
- `docker` - Use Docker to build (isolated, no local Node.js needed)
- `npm` - Use local npm/Node.js to build

**Examples:**
```bash
./run.sh build          # Auto-detect: Docker (preferred) or npm
./run.sh build docker   # Force Docker build
./run.sh test           # Build and start test environment
./run.sh update         # Rebuild and update running environment (no data loss)
./run.sh clean          # Clean test environment completely
```

#### Detailed Test Script: `./scripts/test.sh`

For more advanced testing options:

```bash
./scripts/test.sh [OPTIONS]
```

**Options:**
- `--skip-build` - Skip building the card (use existing dist file)
- `--force-build` - Force rebuild of the card (no cache)
- `--docker-build` - Use Docker to build the card
- `--npm-build` - Use npm to build the card (requires local Node.js)
- `--service-path PATH` - Build service from local source at PATH instead of using pre-built image

**Examples:**
```bash
./scripts/test.sh                                    # Auto-detect build method
./scripts/test.sh --force-build                      # Force rebuild card
./scripts/test.sh --docker-build                     # Build card with Docker
./scripts/test.sh --service-path ../bom-local-service  # Test with local service changes
```

**Note:** If containers are already running, the script automatically updates the card and restarts Home Assistant (preserves HA state).

#### Building from Source (Manual)

If you prefer to build manually:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alexhopeoconnor/bom-local-card.git
   cd bom-local-card
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the card:**
   ```bash
   npm run build
   ```
   The built file will be in `dist/bom-local-radar-card.js`

4. **Development with watch mode:**
   ```bash
   npm run watch
   ```

### Test Environment Details

The test environment includes:

- **Home Assistant**: Running in Docker on port 8124
- **BOM Local Service**: Pre-configured service running on port 8082
- **CORS**: Automatically configured to allow requests from Home Assistant
- **Card Pre-installed**: The built card is automatically added to Home Assistant's resources

**Updating the Card During Development:**

When you make changes to the card code, you can update the running test environment without losing your Home Assistant state:

```bash
./run.sh update
```

This rebuilds the card and updates it in the running Home Assistant container, preserving all your dashboard configurations and test data.

**Testing with Local Service Changes:**

To test the card against a local version of the BOM Local Service (instead of the pre-built image):

```bash
./scripts/test.sh --service-path ../bom-local-service
```

This builds the service from your local source and uses it in the test environment.

## License

MIT License - see [LICENSE](LICENSE) file for details

## Credits

- Built for use with [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service)
- Inspired by the original [bom-radar-card](https://github.com/Makin-Things/bom-radar-card) project

## Troubleshooting & Support

### Card Shows "Configuration Error"

- Ensure both `suburb` and `state` are configured
- Verify the configuration using the visual editor

### Card Shows "Failed to fetch radar data" or "Cache not ready"

- **Check BOM Local Service is running**: Verify the service is accessible at the configured `service_url`
- **Verify Service URL**: Ensure the URL is correct and reachable from your Home Assistant instance
- **Check Cache Status**: The service may be generating the cache for your location. Wait a minute and refresh
- **Network Access**: If the service is on a different machine, ensure network connectivity and firewall rules allow access

### Card Shows "Radar data not found"

- The cache may not be available for your location yet
- Trigger a cache update via the BOM Local Service API:
  ```bash
  curl -X POST http://your-service-url/api/cache/YourSuburb/YourState/refresh
  ```

### Images Don't Load

- Check browser console for CORS errors (may indicate service configuration issue)
- Verify the service URL is correct and images are accessible
- If using a different machine, ensure CORS is properly configured in the service

### Animation Not Playing

- Check that `auto_play` is set to `true` (default)
- Verify frames are loading (check frame count display)
- Try manually clicking the Play button

### Service URL Configuration

- **Local service**: Use `http://localhost:8082` if the service runs on the same machine as Home Assistant
- **Remote service**: Use the IP address or hostname of the machine running the service (e.g., `http://192.168.1.100:8082`)
- **Docker network**: If Home Assistant and the service are in the same Docker network, use the service container name (e.g., `http://bom-local-service:8080`)

### Getting Additional Help

If you're still experiencing issues:

- **Review the [BOM Local Service documentation](https://github.com/alexhopeoconnor/bom-local-service)** - If the issue relates to the service (cache not ready, CORS errors, etc.)
- **Test with the development environment** - Use `./run.sh test` to verify your setup works correctly
- **Open an [issue on GitHub](https://github.com/alexhopeoconnor/bom-local-card/issues)** - For bug reports or feature requests

## Disclaimer

This card displays radar data provided by the [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service), which caches data from the Australian Bureau of Meteorology (BOM). 

This project is not affiliated with or endorsed by the Australian Bureau of Meteorology. For official BOM data and services, visit [bom.gov.au](https://www.bom.gov.au/).
