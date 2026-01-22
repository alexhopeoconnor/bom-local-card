<p align="center">
  <img width="256" height="auto" alt="icon" src="https://github.com/user-attachments/assets/6f712fbd-4f42-49d4-9ddb-1767bb43551a" />
</p>

# BOM Local Card

A Home Assistant custom card that displays Australian Bureau of Meteorology (BOM) rain radar data using the local [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service).

## Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=alexhopeoconnor&repository=bom-local-card&category=Integration)

OR

1. Install HACS - [Instructions](https://www.hacs.xyz/docs/use/download/download/)
2. Add the custom repo to your HACS Store - [Instructions](https://www.hacs.xyz/docs/faq/custom_repositories/)
3. Add the integration to Home Assistant by searching for "BOM Local Card" in the HACS Store

## Background

The Australian Bureau of Meteorology's radar API endpoint stopped working in December 2024, breaking integrations like the popular [bom-radar-card](https://github.com/Makin-Things/bom-radar-card) for Home Assistant. This card provides a replacement solution that displays BOM radar data by connecting to the [BOM Local Service](https://github.com/alexhopeoconnor/bom-local-service), which caches radar data locally and provides it via a REST API.

## Features

- 🌧️ **Live Radar Display**: View the latest BOM rain radar images for any Australian location
- 🎬 **Animated Slideshow**: Play through radar frames to see precipitation movement with smooth animations
- 📊 **Historical Data**: View radar history from 1 hour to 24 hours ago, or custom time ranges
- 🎯 **Location-Based**: Support for any Australian suburb/state combination with dropdown selection
- 🔄 **Auto-Refresh**: Automatically updates radar data at configurable intervals
- 🎨 **Modern UI**: Sleek, responsive design that integrates seamlessly with Home Assistant themes
- ⚙️ **Visual Editor**: Full GUI configuration editor with expandable sections (no YAML editing required)
- 🎛️ **Flexible Display**: Granular control over metadata and controls visibility
- 🖼️ **Image Customization**: Zoom (0.5x to 3.0x) and fit options (contain/cover/fill)
- 📍 **Overlay Options**: Overlay controls and metadata on images to save space
- ⌨️ **Keyboard Navigation**: Full keyboard support (arrow keys, spacebar, home/end)
- ♿ **Accessible**: ARIA labels and screen reader support
- 🔍 **Enhanced Error Handling**: Detailed error messages with retry suggestions and auto-retry
- 📱 **Responsive**: Optimized for mobile, tablet, and desktop

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
3. Search for **BOM Local Card**
4. Click **Download**
5. Restart Home Assistant

### Step 3: Add the Card to Your Dashboard

1. Edit your Lovelace dashboard
2. Click **Add Card**
3. Search for **BOM Local Card** or select **Custom: BOM Local Card**
4. Configure the card (see [Configuration](#configuration) section below)
5. Set the **Service URL** to match your service installation (e.g., `http://localhost:8082` or `http://192.168.1.50:8082`)

## Configuration

### Using the Visual Editor (Recommended)

1. Add a card to your Lovelace dashboard
2. Search for **BOM Local Card** or select **Custom: BOM Local Card**
3. Configure using the visual editor:
   
   **Service Configuration**:
   - **Service URL**: Base URL of your BOM Local Service (default: `http://localhost:8082`)
   - **Suburb**: The suburb name (e.g., `Pomona`, `Brisbane`) - **Required**
   - **State**: State dropdown - Select from all Australian states - **Required**
   
   **Display**:
   - **Show Card Title**: Toggle to show/hide card title (uses HA card header)
   - **Card Title**: Custom title for the card (only shown if "Show Card Title" is enabled)
   - **Show Metadata**: Toggle to show/hide metadata section (expandable for granular control)
     - When expanded, you can control individual metadata items:
       - Cache Status
       - Observation Time
       - Forecast Time
       - Weather Station
       - Distance
       - Next Update
       - Frame Times
     - **Metadata Position**: Choose where to display metadata (Above Image, Below Image, Overlay on Image)
     - **Metadata Style**: Choose display style (Cards, Compact, Minimal)
   - **Show Controls**: Toggle to show/hide controls section (expandable for granular control)
     - When expanded, you can control individual controls:
       - Play/Pause Button
       - Previous/Next Buttons
       - Frame Slider
       - Navigation Buttons (skip 1/3 of frames, First, Last)
       - Frame Info
     - **Controls Position**: Choose where to display controls (Above Image, Below Image, Overlay on Image)
     - When position is "Overlay on Image":
       - **Controls Overlay Position**: Choose overlay position (Top, Bottom, Left, Right, Center)
       - **Controls Overlay Opacity**: Control overlay transparency (0.0 to 1.0)
     - **Conflict Detection**: Editor warns if metadata and controls overlays would conflict
   - **Image Zoom**: Zoom level for radar images (0.5 = 50%, 1.0 = 100%, 2.0 = 200%, range: 0.5-3.0)
   - **Image Fit**: How images fit in container (Contain, Cover, Fill)
   
   **Slideshow**:
   - **Timespan**: Select historical data range - `latest` (Latest 7 frames), `1h`, `3h`, `6h`, `12h`, `24h`, or `custom` (default: `latest`)
   - **Frame Interval**: Seconds between frames during animation (default: `2.0`, range: 0.5-10)
   - **Auto Play**: Automatically start animation when data loads (default: `true`)
   
   **Auto Refresh**:
   - **Refresh Interval**: Seconds between automatic data refreshes (default: `30`, range: 10-300)

**Note**: For custom time ranges (using `timespan: custom`), the editor will show input fields for `custom_start_time` and `custom_end_time`. The editor also displays available cache range information and warns if your selected timespan exceeds available data.

### Using YAML

```yaml
type: custom:bom-local-card
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
type: custom:bom-local-card
service_url: http://localhost:8082
suburb: Brisbane
state: QLD
timespan: custom
custom_start_time: "2024-01-15T10:00:00Z"
custom_end_time: "2024-01-15T14:00:00Z"
```

### Configuration Options

#### Service Configuration

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `service_url` | string | `http://localhost:8082` | No | Base URL of the BOM Local Service |
| `suburb` | string | - | **Yes** | Suburb name (e.g., "Pomona", "Brisbane") |
| `state` | string | - | **Yes** | State abbreviation (e.g., "QLD", "NSW", "VIC") - Use dropdown in editor |

#### Display Options

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `show_card_title` | boolean | `true` | No | Show/hide card title (uses HA card header) |
| `card_title` | string | - | No | Custom title displayed in card header |
| `show_metadata` | boolean \| object | `true` | No | Show/hide metadata. Can be `true`/`false` or object for granular control (see below) |
| `show_controls` | boolean \| object | `true` | No | Show/hide controls. Can be `true`/`false` or object for granular control (see below) |
| `image_zoom` | number | `1.0` | No | Image zoom level: 0.5 = 50%, 1.0 = 100%, 2.0 = 200% (range: 0.5-3.0) |
| `image_fit` | string | `contain` | No | How image fits in container: `contain`, `cover`, or `fill` |
| `overlay_controls` | boolean | `false` | No | Overlay controls on the radar image |
| `overlay_position` | string | `bottom` | No | Overlay position: `top`, `bottom`, `left`, `right`, or `center` |
| `overlay_opacity` | number | `0.9` | No | Overlay opacity (range: 0.0-1.0) |

#### Metadata Display Configuration (when `show_metadata` is an object)

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_cache_status` | boolean | `true` | Show cache validity status |
| `show_observation_time` | boolean | `true` | Show observation time (absolute and relative) |
| `show_forecast_time` | boolean | `true` | Show forecast time |
| `show_weather_station` | boolean | `true` | Show weather station name |
| `show_distance` | boolean | `true` | Show distance to weather station |
| `show_next_update` | boolean | `true` | Show next update time |
| `show_frame_times` | boolean | `true` | Show frame observation times |
| `position` | string | `above` | Where to display: `above`, `below`, or `overlay` |
| `style` | string | `cards` | Display style: `cards`, `compact`, or `minimal` |

#### Controls Display Configuration (when `show_controls` is an object)

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_play_pause` | boolean | `true` | Show play/pause button |
| `show_prev_next` | boolean | `true` | Show previous/next buttons |
| `show_slider` | boolean | `true` | Show frame slider |
| `show_nav_buttons` | boolean | `true` | Show navigation buttons (skip 1/3 of frames, First, Last) |
| `show_frame_info` | boolean | `true` | Show frame information (frame number, timestamp) |
| `position` | string | `below` | Where to display: `above`, `below`, or `overlay` |

**Note**: When `position` is set to `overlay`, use the top-level `controls_overlay_position` and `controls_overlay_opacity` options to control overlay placement and transparency.

#### Slideshow Configuration

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `timespan` | string | `latest` | No | Historical data timespan: `latest`, `1h`, `3h`, `6h`, `12h`, `24h`, or `custom` |
| `frame_interval` | number | `2.0` | No | Seconds between frames during animation (range: 0.5-10) |
| `auto_play` | boolean | `true` | No | Automatically start animation when data loads |
| `custom_start_time` | string | - | No | ISO 8601 datetime for custom timespan start (requires `timespan: custom`) |
| `custom_end_time` | string | - | No | ISO 8601 datetime for custom timespan end (requires `timespan: custom`) |

#### Auto-Refresh Configuration

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `refresh_interval` | number | `30` | No | Seconds between automatic data refreshes (range: 10-300) |

#### Localization

| Option | Type | Default | Required | Description |
|--------|------|---------|----------|-------------|
| `locale` | string | HA locale | No | Override locale for date/time formatting (e.g., "en-AU", "en-US") |

## Usage Examples

### Basic Configuration

Display the latest radar frames for a location:

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
service_url: http://192.168.1.100:8082
```

### Minimal Display (Image Only)

Show just the radar image with no controls or metadata:

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
show_metadata: false
show_controls: false
```

### Overlay Controls and Metadata on Image

Overlay both controls and metadata on the radar image to save space:

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
show_controls:
  position: overlay
controls_overlay_position: bottom
controls_overlay_opacity: 0.9
show_metadata:
  position: overlay
  style: compact
metadata_overlay_position: top
metadata_overlay_opacity: 0.85
```

**Note**: The editor will warn you if metadata and controls overlays are configured at conflicting positions (e.g., both at "top").

### Image Zoom

Zoom in on the radar image (may pixelate at higher zoom levels):

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
image_zoom: 1.5
image_fit: contain
```

### Granular Metadata Control

Show only specific metadata items:

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
show_metadata:
  show_cache_status: true
  show_observation_time: true
  show_weather_station: false
  show_distance: false
  show_next_update: false
  show_frame_times: true
  position: above
  style: compact
```

### Granular Controls Control

Show only specific controls and position them above the image:

```yaml
type: custom:bom-local-card
suburb: Brisbane
state: QLD
show_controls:
  show_play_pause: true
  show_slider: true
  show_frame_info: true
  show_nav_buttons: false
  show_prev_next: false
  position: above
```

### Historical Data (Last 3 Hours)

View radar history from the past 3 hours:

```yaml
type: custom:bom-local-card
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
type: custom:bom-local-card
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
type: custom:bom-local-card
suburb: Adelaide
state: SA
service_url: http://192.168.1.100:8082
auto_play: false
frame_interval: 3.0
```

### Different Service Location

If your BOM Local Service is running on a different machine:

```yaml
type: custom:bom-local-card
suburb: Perth
state: WA
service_url: http://192.168.1.50:8082
refresh_interval: 60
```

## Controls

The card provides several controls for navigating radar frames (all can be individually shown/hidden):

- **Play/Pause Button**: Start or stop the animation
- **Previous/Next Buttons**: Navigate to the previous or next frame
- **Frame Slider**: Drag to jump to any frame
- **Navigation Buttons** (only shown for timeseries data):
  - ⏮ First frame
  - -X / +X: Jump backward/forward by approximately 1/3 of total frames (dynamically calculated)
  - ⏭ Last frame
- **Frame Info**: Compact display showing frame number, total frames, observation time, and progress percentage in a single line

### Keyboard Navigation

The card supports full keyboard navigation when focused:

- `←` / `→`: Navigate to previous/next frame
- `Space`: Play/pause animation
- `Home`: Jump to first frame
- `End`: Jump to last frame

### Error Handling

The card provides enhanced error handling with intelligent retry logic:

- **Structured Error Messages**: Detailed error information from the service with error codes and types
- **Smart Auto-Retry**: Automatically retries failed requests based on service recommendations:
  - **Normal retries**: Auto-retries after service-suggested delay (typically 30-120 seconds)
  - **Manual refresh recommended**: When previous update failed, shows message and skips auto-retry
  - **Network issues**: Suggests checking network before retrying
  - **Time range errors**: No auto-retry, suggests adjusting time range
- **Error Details**: Shows error codes, previous update failures, available data ranges, and refresh endpoints
- **Retry Button**: Manual retry option - text changes to "Retry Anyway" when manual refresh is recommended
- **Better Cache Messages**: Clear messages for fresh start scenarios, cache generation status, and update progress
- **Service Integration**: Respects service-calculated retry times and action recommendations

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
./run.sh [COMMAND] [BUILD_METHOD] [TARGET]
```

**Commands:**
- `build [docker|npm] [dev|prod]` - Build the card (auto-detects method if not specified)
- `test` - Build and start the test Home Assistant environment
- `update [docker|npm]` - Rebuild card and update running test environment (preserves HA state)
- `clean` - Clean test environment (stops containers, removes data)

**Build Methods:**
- `docker` - Use Docker to build (isolated, no local Node.js needed)
- `npm` - Use local npm/Node.js to build

**Targets:**
- `dev` (default) - Unminified build with sourcemaps for debugging
- `prod` - Minified build using Terser, no sourcemaps (for HACS release)

**Examples:**
```bash
./run.sh build          # Auto-detect method, dev build
./run.sh build docker   # Force Docker, dev build
./run.sh build npm prod # Build production version with local npm
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
   The built file will be in `dist/bom-local-card.js`

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

### Card Shows Error Messages

The card now provides detailed error messages with intelligent retry behavior:

- **"Cache Not Ready" / "CACHE_NOT_FOUND"**: 
  - This is normal for fresh installations or new locations
  - The service automatically triggers a cache update in the background
  - The card will auto-retry after the service-suggested time (typically 30-120 seconds, calculated based on update progress)
  - You can manually retry using the "Retry Now" button
  - **Check BOM Local Service is running**: Verify the service is accessible at the configured `service_url`
  - **Verify Service URL**: Ensure the URL is correct and reachable from your Home Assistant instance
  - **Wait for Cache Generation**: First-time cache generation takes 30-60 seconds

- **"Previous Update Failed" / "Manual Refresh Recommended"**:
  - A previous cache update attempt failed
  - The error details will show the specific failure reason and error code
  - **Auto-retry is disabled** - the card shows "Manual refresh recommended" message
  - The retry button changes to "Retry Anyway" if you want to force a retry
  - Check service logs for more details about the failure
  - The error details include a refresh endpoint URL for manual cache refresh

- **"TIME_RANGE_ERROR"**:
  - The requested time range exceeds available data or maximum allowed duration
  - Error details show available data range and requested range
  - **Auto-retry is disabled** - adjust your timespan to match available data
  - The service suggests the available time range in error details

- **Network Errors**:
  - Check network connectivity between Home Assistant and the service
  - Verify firewall rules allow access
  - Check CORS configuration if accessing from browser
  - The service may suggest waiting longer before retrying network-related errors

**Understanding Error Actions:**
- The service provides an `action` field in error responses that guides retry behavior:
  - `retry_after_seconds`: Card will auto-retry after the suggested delay
  - `manual_refresh_recommended`: Card shows message but doesn't auto-retry (previous update failed)
  - `check_network_and_retry`: Suggests checking network before retrying
  - `adjust_time_range`: No auto-retry, suggests adjusting time range

### Card Shows "Radar data not found"

- The cache may not be available for your location yet
- The card will automatically retry after the service-suggested delay
- If auto-retry is disabled (manual refresh recommended), you can:
  - Click "Retry Anyway" button in the error message
  - Or trigger a cache update via the BOM Local Service API:
    ```bash
    curl -X POST http://your-service-url/api/cache/YourSuburb/YourState/refresh
    ```
  - The error details include the refresh endpoint URL for your location
- Check the error message details for specific information about cache status, including:
  - Whether an update is in progress
  - When the next update is expected
  - Previous update failure reasons (if applicable)

### Images Don't Load

- Check browser console for CORS errors (may indicate service configuration issue)
- Verify the service URL is correct and images are accessible
- If using a different machine, ensure CORS is properly configured in the service

### Animation Not Playing

- Check that `auto_play` is set to `true` (default)
- Verify frames are loading (check frame count display)
- Try manually clicking the Play button
- Check that controls are visible (may be hidden via `show_controls` configuration)

### Editor Issues

- **Dropdowns not working**: The editor now uses native HTML select elements for better compatibility
- **Layout looks jumbled**: The editor has been redesigned with better spacing and organization
- **State selection**: Use the dropdown to select from all Australian states (no need to type abbreviations)

### Image Display Issues

- **Image not centered**: This has been fixed in the latest version
- **Image too small/large**: Use the `image_zoom` option (0.5 to 3.0) to adjust size
- **Image doesn't fit properly**: Try different `image_fit` options (`contain`, `cover`, `fill`)

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
