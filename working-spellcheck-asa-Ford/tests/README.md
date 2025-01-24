Run Tests for Specific Websites

1. Run the Tests for https://www.teenvoice.com

For Command Prompt:

set URL=https://www.teenvoice.com
set FOLDER_NAME=teenvoice
set DIC_FILENAME=teenvoice
set HEADLESS=true
npx playwright test

For PowerShell:

$env:URL = "https://www.teenvoice.com"
$env:FOLDER_NAME = "teenvoice"
$env:DIC_FILENAME = "teenvoice"
$env:HEADLESS="true"
npx playwright test

$env:URL="https://www.teenvoice.com"; $env:FOLDER_NAME="teenvoice"; $env:DIC_FILENAME="teenvoice"; $env:HEADLESS="true"; npx playwright test


2. Run the Tests for https://www.vml.com

For Command Prompt:

set URL=https://www.vml.com
set FOLDER_NAME=vml.com
set DIC_FILENAME=vml
set HEADLESS=true
npx playwright test

For PowerShell:

$env:URL = "https://www.vml.com"
$env:FOLDER_NAME = "vml"
$env:DIC_FILENAME = "vml"
$env:HEADLESS="true"
npx playwright test
$env:URL="https://www.vml.com"; $env:FOLDER_NAME="vml"; $env:DIC_FILENAME="vml"; $env:HEADLESS="true"; npx playwright test


3. Run the Tests for https://www.wpp.com

For Command Prompt:

set URL=https://www.wpp.com
set FOLDER_NAME=wpp
set DIC_FILENAME=wpp
set HEADLESS=false
npx playwright test

For PowerShell:

$env:URL = "https://www.wpp.com"
$env:FOLDER_NAME = "wpp"
$env:DIC_FILENAME = "wpp"
$env:HEADLESS="false"
npx playwright test
$env:URL="https://www.wpp.com"; $env:FOLDER_NAME="wpp"; $env:DIC_FILENAME="wpp"; $env:HEADLESS="false"; npx playwright test

4. Run the Tests for https://www.ford.com

For Command Prompt:

set URL=https://www.ford.com
set FOLDER_NAME=ford
set DIC_FILENAME=ford
set HEADLESS=false
npx playwright test

For PowerShell:

$env:URL = "https://www.ford.com"
$env:FOLDER_NAME = "ford"
$env:DIC_FILENAME = "ford"
$env:HEADLESS="false"
npx playwright test
$env:URL="https://www.ford.com"; $env:FOLDER_NAME="ford"; $env:DIC_FILENAME="ford"; $env:HEADLESS="false"; npx playwright test

Explanation of Parameters

URL: The base URL of the website under test.

FOLDER_NAME: Name of the folder where the test results or logs will be saved.

DIC_FILENAME: Name of the dictionary or configuration file used during testing.

HEADLESS: Determines whether the browser will run in headless mode (true) or in GUI mode (false).

Notes

Replace the values of URL, FOLDER_NAME, and DIC_FILENAME with appropriate values for other websites if needed.

Ensure your test scripts are properly configured to use the environment variables.

For additional Playwright options, refer to the official documentation.